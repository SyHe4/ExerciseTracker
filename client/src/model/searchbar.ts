import { getUsers, type User } from '@/model/users';
import { ref } from 'vue';
const users = ref([] as User[]);
getUsers().then((data) => {
    users.value = data;
});

export function searchbar() {
    const input = (document.getElementById('myInput') as HTMLInputElement).value.toLowerCase();
    const filteredUsers = users.value.filter((user) => {
        const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
        return fullName.includes(input) || user.username.toLowerCase().includes(input);
    });
    users.value = filteredUsers;
}