import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import './Users.css'

function Admin() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')
  const navigate = useNavigate()

  // Admin password (간단한 예시 - 실제로는 더 안전한 방법 사용)
  const ADMIN_PASSWORD = 'nuha2024'

  const loadUsers = () => {
    const savedUsers = JSON.parse(localStorage.getItem('nuhaHouseUsers') || '[]')
    console.log('Loaded users from localStorage:', savedUsers)
    console.log('Total users:', savedUsers.length)
    setUsers(savedUsers)
  }

  useEffect(() => {
    // Check if already authenticated
    const authStatus = sessionStorage.getItem('adminAuthenticated')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
      loadUsers()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      sessionStorage.setItem('adminAuthenticated', 'true')
      setError('')
      loadUsers()
    } else {
      setError('비밀번호가 올바르지 않습니다.')
      setPassword('')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem('adminAuthenticated')
    setPassword('')
    navigate('/')
  }

  const handleClearAll = () => {
    if (window.confirm('모든 사용자 정보를 삭제하시겠습니까?')) {
      localStorage.removeItem('nuhaHouseUsers')
      setUsers([])
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="users-container">
        <div className="users-card" style={{ maxWidth: '400px' }}>
          <div className="users-header">
            <h1>관리자 로그인</h1>
            <p>Nuha House 관리자 페이지</p>
          </div>

          <form onSubmit={handleLogin} className="admin-form">
            <div className="form-group">
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError('')
                }}
                placeholder="비밀번호를 입력하세요"
                className={error ? 'error' : ''}
                autoFocus
              />
              {error && <span className="error-message">{error}</span>}
            </div>

            <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700 w-full">
              로그인
            </Button>
          </form>

          <div className="users-actions" style={{ marginTop: '24px' }}>
            <Button variant="ghost" onClick={() => navigate('/')}>
              홈으로
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="users-container">
      <div className="users-card">
        <div className="users-header">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <div>
              <h1>가입한 사용자 목록</h1>
              <p>Nuha House에 가입한 분들을 환영합니다!</p>
            </div>
            <Button 
              variant="outline" 
              onClick={handleLogout}
              className="text-sm"
            >
              로그아웃
            </Button>
          </div>
        </div>

        {users.length === 0 ? (
          <div className="empty-state">
            <p>아직 가입한 사용자가 없습니다.</p>
          </div>
        ) : (
          <>
            <div className="users-list">
              {users.map((user, index) => {
                const date = new Date(user.createdAt)
                const formattedDate = date.toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })
                
                return (
                  <div key={index} className="user-card">
                    <div className="user-info">
                      <h3>{user.firstName} {user.lastName}</h3>
                      <p className="user-email">{user.email}</p>
                      <p className="user-date">가입일: {formattedDate}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            
            <div className="users-footer">
              <p className="users-count">총 {users.length}명이 가입했습니다</p>
              <Button 
                variant="outline" 
                onClick={handleClearAll}
                className="clear-button"
              >
                전체 삭제
              </Button>
            </div>
          </>
        )}

        <div className="users-actions">
          <Button 
            variant="outline" 
            onClick={loadUsers}
            className="mr-2"
          >
            새로고침
          </Button>
          <Button variant="ghost" onClick={() => navigate('/')}>
            홈으로
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Admin

