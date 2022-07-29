import { useState } from 'react'
import { useRecoilState } from 'recoil'

import { counterState, friendState } from '../../recoil/Counter'

import FriendList from './FriendList'

import styles from './main.module.css'

const Main = () => {
  const [count, setCount] = useRecoilState(counterState)
  const [friendList, setFriendList] = useRecoilState(friendState)

  const [name, setName] = useState('')

  const handleClickCount = () => {
    setCount((prev) => prev + 1)
  }

  const handleChangeName = (evt) => {
    setName(evt.currentTarget.value)
  }

  const handleClickAddFriendButton = () => {
    if (!name) return

    setFriendList((prev) => [...prev, name])
    setName('')
  }

  return (
    <div className={styles.container}>
      <div className={styles.countWrapper}>
        <h1>{count}</h1>
        <button onClick={handleClickCount}>카운트 증가</button>
      </div>
      <div className={styles.friendWrapper}>
        <input type="text" value={name} onChange={handleChangeName} />
        <button onClick={handleClickAddFriendButton}>친구 추가</button>
        <FriendList friendList={friendList} />
      </div>
    </div>
  )
}

export default Main
