import Friend from './Friend'

const FriendList = ({ friendList }) => {
  return (
    <ul>
      {friendList.map((friend, idx) => {
        const key = `friend-list-${idx}`
        return <Friend key={key} friend={friend} />
      })}
    </ul>
  )
}

export default FriendList
