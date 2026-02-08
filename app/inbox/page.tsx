"use client";
import Link from 'next/link'

export default function HomePage() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>
        🏠 Roommate Finder
      </h1>
      <p style={{ fontSize: '20px', marginBottom: '40px', color: '#666' }}>
        Find your perfect roommate today
      </p>
      
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link href="/signup">
          <button style={{ 
            padding: '15px 30px', 
            fontSize: '18px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}>
            Sign Up
          </button>
        </Link>
        
        <Link href="/login">
          <button style={{ 
            padding: '15px 30px', 
            fontSize: '18px',
            backgroundColor: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}>
            Login
          </button>
        </Link>
      </div>
      
      <Link href="/listings" style={{ marginTop: '30px', color: '#3b82f6' }}>
        Browse Listings →
      </Link>
    </div>
  )
}