import { useRef } from 'react'
import { db } from '../../../config/firebase'
import { collection, serverTimestamp, doc, setDoc } from 'firebase/firestore'

export default function TodoInput() {
  const contentRef = useRef()

  async function handleSubmit(e) {
    e.preventDefault()

    const docRef = doc(collection(db, 'todos'))
    const data = {
      id: docRef.id,
      content: contentRef.current.value,
      completed: false,
      date: serverTimestamp(),
    }
    await setDoc(docRef, data)
    contentRef.current.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Write a todo...' ref={contentRef} />
    </form>
  )
}
