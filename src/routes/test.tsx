import { createFileRoute, useSearch } from '@tanstack/react-router';

export const Route = createFileRoute('/test')({
  component: () => {
    const search = useSearch({ from: '/test' });
    return <div>Hello /test! The query is: {search.query}</div>;
  },
});
