import { create } from 'zustand'

export const CountStore = create(set => ({
  count: 0,
  countUp: () => set(state => ({ count: state.count + 1 })),
  countDown: () => set(state => ({ count: state.count - 1 })),

  name: 'Alice',
  toggleName: () =>
    set(state => ({ name: state.name === 'Alice' ? 'Picaso' : 'Alice' })),
}))
