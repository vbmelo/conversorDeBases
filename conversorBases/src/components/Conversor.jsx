import styles from './Conversor.modules.css'

export function Header() {
    return (
        <div className={styles.Conversor}>
            <form onSubmit={handleCreateNewTask}>
                <input 
                    type="text" 
                    placeholder="Adicione uma nova tarefa"
                    name='task'
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    value={newTaskTitle}
                    onInvalid={handleNewTaskInvalid}
                    required
                />
                <button type="submit" disabled={isNewTaskEmpty} onClick={handleCreateNewTask}>
                    Criar <span><PlusCircle size={16} /></span> 
                </button>
            </form>
        </div>
    )
}