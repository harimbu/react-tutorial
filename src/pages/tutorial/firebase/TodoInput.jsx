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
      <input
        className='w-full border border-gray-400 rounded-md p-3 mb-4 text-xl'
        type='text'
        placeholder='Write a todo...'
        ref={contentRef}
      />
    </form>
  )
}
