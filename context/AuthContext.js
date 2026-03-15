import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get current session
    supabase.auth.getSession().then(({ data }) => {
      setUser(data?.session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const login = async (email, password) => {
    return await supabase.auth.signInWithPassword({
      email,
      password,
    });
  };

  const signup = async (email, password) => {
    return await supabase.auth.signUp({
      email,
      password,
    });
  };

  const logout = async () => {
    return await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};