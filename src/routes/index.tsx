import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useRef } from 'react'

export const Route = createFileRoute('/')({
    component: () => {
        const navigate = useNavigate()

        const inputRef = useRef<HTMLInputElement>(null)

        const onQueryChange = () => {
            if (inputRef.current !== null) {
                navigate({ search: { query: inputRef.current.value } })
            }
        }

        return (
            <div>
                <p>Enter a query and then click the button.</p>
                <p>
                    Notice that the query is not persisted through the
                    navigation.
                </p>
                <input ref={inputRef} type="text" onChange={onQueryChange} />
                <button onClick={() => navigate({ to: '/test' })}>
                    Click me!
                </button>
            </div>
        )
    }
})
