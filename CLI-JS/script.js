const API_BASE_URL = 'http://127.0.0.1:5000/'; 

// Funções para usuários
const usersApi = {
    createUser: async (userData) => {
        const response = await fetch(`${API_BASE_URL}/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        });
        return response.json();
    },
    getUsers: async () => {
        const response = await fetch(`${API_BASE_URL}/users`);
        return response.json();
    },
    getUserById: async (userId) => {
        const response = await fetch(`${API_BASE_URL}/users/${userId}`);
        return response.json();
    },
    updateUser: async (userId, userData) => {
        const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        });
        return response.json();
    },
    deleteUser: async (userId) => {
        const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
            method: 'DELETE',
        });
        return response.json();
    },
};

// Funções para playlists
const playlistsApi = {
    createPlaylist: async (playlistData) => {
        const response = await fetch(`${API_BASE_URL}/playlists`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(playlistData),
        });
        return response.json();
    },
    getPlaylists: async () => {
        const response = await fetch(`${API_BASE_URL}/playlists`);
        return response.json();
    },
    getPlaylistById: async (playlistId) => {
        const response = await fetch(`${API_BASE_URL}/playlists/${playlistId}`);
        return response.json();
    },
    updatePlaylist: async (playlistId, playlistData) => {
        const response = await fetch(`${API_BASE_URL}/playlists/${playlistId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(playlistData),
        });
        return response.json();
    },
    deletePlaylist: async (playlistId) => {
        const response = await fetch(`${API_BASE_URL}/playlists/${playlistId}`, {
            method: 'DELETE',
        });
        return response.json();
    },
};

// Funções para músicas
const songsApi = {
    createSong: async (songData) => {
        const response = await fetch(`${API_BASE_URL}/songs`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(songData),
        });
        return response.json();
    },
    getSongs: async () => {
        const response = await fetch(`${API_BASE_URL}/songs`);
        return response.json();
    },
    getSongById: async (songId) => {
        const response = await fetch(`${API_BASE_URL}/songs/${songId}`);
        return response.json();
    },
    updateSong: async (songId, songData) => {
        const response = await fetch(`${API_BASE_URL}/songs/${songId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(songData),
        });
        return response.json();
    },
    deleteSong: async (songId) => {
        const response = await fetch(`${API_BASE_URL}/songs/${songId}`, {
            method: 'DELETE',
        });
        return response.json();
    },
};

// Exemplo de uso das funções
(async () => {
    // Usuários
    const newUser = await usersApi.createUser({ name: 'John Doe', email: 'john@example.com' });
    console.log('Novo usuário:', newUser);

    const users = await usersApi.getUsers();
    console.log('Lista de usuários:', users);

    const updatedUser = await usersApi.updateUser(newUser.id, { name: 'Jane Doe' });
    console.log('Usuário atualizado:', updatedUser);

    const deletedUser = await usersApi.deleteUser(newUser.id);
    console.log('Usuário deletado:', deletedUser);

    // Playlists
    const newPlaylist = await playlistsApi.createPlaylist({ title: 'Minha Playlist', description: 'Melhores músicas' });
    console.log('Nova playlist:', newPlaylist);

    const playlists = await playlistsApi.getPlaylists();
    console.log('Lista de playlists:', playlists);

    const updatedPlaylist = await playlistsApi.updatePlaylist(newPlaylist.id, { title: 'Minha Playlist Atualizada' });
    console.log('Playlist atualizada:', updatedPlaylist);

    const deletedPlaylist = await playlistsApi.deletePlaylist(newPlaylist.id);
    console.log('Playlist deletada:', deletedPlaylist);

    // Músicas
    const newSong = await songsApi.createSong({ title: 'Minha Música', artist: 'Artista' });
    console.log('Nova música:', newSong);

    const songs = await songsApi.getSongs();
    console.log('Lista de músicas:', songs);

    const updatedSong = await songsApi.updateSong(newSong.id, { title: 'Minha Música Atualizada' });
    console.log('Música atualizada:', updatedSong);

    const deletedSong = await songsApi.deleteSong(newSong.id);
    console.log('Música deletada:', deletedSong);
})();
