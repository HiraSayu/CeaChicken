import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();  // useNavigateフックを使用

  // コンポーネントがマウントされたときに実行される
  useEffect(() => {
    navigate('/register_profile');  // /register_profileにリダイレクト
  }, [navigate]);

  return null;  // このコンポーネントでは何も表示しない
}

export default Home;
