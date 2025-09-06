import React, { useEffect, useState, type ReactNode } from "react";
import {
  type AuthContextType,
  type User,
  type LoginRequest,
  type RegisterRequest,
  type AuthResponse,
} from "../types/AuthTypes";
import { AuthContext } from "../contexts/AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isAuthenticated = !!user && !!token;

  useEffect(() => {
    initializeAuth();
  }, []);

  const initializeAuth = async () => {
    try {
      const savedToken = localStorage.getItem("authToken");
      if (savedToken) {
        await verifyToken();
        setToken(savedToken);
      }
    } catch (error) {
      console.error("Failed to initialize auth:", error);
      localStorage.removeItem("authToken");
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (credentials: LoginRequest) => {
    try {
      setIsLoading(true);

      const response = await fetch(
        `https://localhost:7064/api/Authentication/Login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Login failed");
      }

      const authResponse: AuthResponse = await response.json();

      setToken(authResponse.token);
      setUser(authResponse.user);
      localStorage.setItem("authToken", authResponse.token);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: RegisterRequest) => {
    try {
      setIsLoading(true);

      const response = await fetch(
        `https://localhost:7064/api/Authentication/Register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Registration failed");
      }

      const authResponse: AuthResponse = await response.json();

      setToken(authResponse.token);
      setUser(authResponse.user);
      localStorage.setItem("authToken", authResponse.token);
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("authToken");
  };
  const verifyToken = async () => {
    try {
      const currentToken = token || localStorage.getItem("authToken");

      if (!currentToken) {
        throw new Error("No token available");
      }

      const response = await fetch(
        `https://localhost:7064/api/Authentication/verify`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${currentToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Token verification failed");
      }

      const userData: User = await response.json();
      setUser(userData);

      if (!token) {
        setToken(currentToken);
      }
    } catch (error) {
      console.error("Token verification error:", error);
      logout();
      throw error;
    }
  };

  const contextValue: AuthContextType = {
    user,
    token,
    isLoading,
    isAuthenticated,
    login,
    register,
    logout,
    verifyToken,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
