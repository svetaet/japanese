const preventPropagation = (e: { stopPropagation: () => void }) => e.stopPropagation()

export default preventPropagation
