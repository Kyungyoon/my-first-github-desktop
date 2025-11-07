import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import './Users.css'

function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    // Load users from localStorage
    const savedUsers = JSON.parse(localStorage.getItem('nuhaHouseUsers') || '[]')
    setUsers(savedUsers)
  }, [])

  const handleClearAll = () => {
    if (window.confirm('모든 사용자 정보를 삭제하시겠습니까?')) {
      localStorage.removeItem('nuhaHouseUsers')
      setUsers([])
    }
  }

  return (
    <div className="users-container">
      <div className="users-card">
        <div className="users-header">
          <h1>가입한 사용자 목록</h1>
          <p>Nuha House에 가입한 분들을 환영합니다!</p>
        </div>

        {users.length === 0 ? (
          <div className="empty-state">
            <p>아직 가입한 사용자가 없습니다.</p>
            <Link to="/signup">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                첫 번째로 가입하기
              </Button>
            </Link>
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
          <Link to="/">
            <Button variant="ghost">홈으로</Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              새 계정 만들기
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Users

