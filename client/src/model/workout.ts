export function openForm(){
    const workout = document.getElementById('addWorkout');

    if(workout != null){
            workout.style.display = 'block';
    }
}

export function closeForm(){
    const workout = document.getElementById('addWorkout');

    if(workout != null){
            workout.style.display = 'none';
    }
}