const getById = <T extends { id: string }>(items: T[], id: string) => items.find(i => i.id === id)

export default getById
