# Definir una lista para almacenar las tareas
lista_de_tareas = []

# Función para agregar una tarea
def agregar_tarea(indicador, descripcion, completada=False):
    tarea = {
        'indicador': indicador,
        'descripcion': descripcion,
        'completada': completada
    }
    lista_de_tareas.append(tarea)
    print(f'Tarea añadida: {tarea}')

# Función para eliminar una tarea
def eliminar_tarea(indicador):
    tarea_encontrada = None
    for tarea in lista_de_tareas:
        if tarea['indicador'] == indicador:
            tarea_encontrada = tarea
            break
    if tarea_encontrada:
        lista_de_tareas.remove(tarea_encontrada)
        print(f'Tarea eliminada: {tarea_encontrada}')
    else:
        print(f'No se encontró ninguna tarea con el indicador: {indicador}')

# Función para marcar una tarea como completada
def completar_tarea(indicador):
    tarea_encontrada = None
    for tarea in lista_de_tareas:
        if tarea['indicador'] == indicador:
            tarea_encontrada = tarea
            break
    if tarea_encontrada:
        tarea_encontrada['completada'] = True
        print(f'Tarea completada: {tarea_encontrada}')
    else:
        print(f'No se encontró ninguna tarea con el indicador: {indicador}')

# Función para mostrar la lista de tareas
def mostrar_tareas():
    print('Lista de tareas:')
    for tarea in lista_de_tareas:
        estado = 'Completada' if tarea['completada'] else 'Pendiente'
        print(f'Indicador: {tarea["indicador"]}, Descripción: {tarea["descripcion"]}, Estado: {estado}')

# Ejemplo de uso:
agregar_tarea('1', 'Hacer la compra')
agregar_tarea('2', 'Llamar a Juan')
agregar_tarea('3', 'Estudiar para el examen')
mostrar_tareas()

completar_tarea('1')
eliminar_tarea('2')
mostrar_tareas()
