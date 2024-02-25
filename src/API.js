async function PostLogin(username, password) {
    const res = await fetch(import.meta.env.VITE_BASE_API + '/login', {
        method: 'POST',
        body: JSON.stringify({
            username,
            password,
        }),
    });

    const r = await res.json();
    if (!r.success) throw new Error(r.error);
    if (!res.ok) throw new Error(res.statusText);

    localStorage.setItem('token', r.token);
    localStorage.setItem('refresh', r.refreshToken);

    window.location.href = '/dashboard';
}

async function PostRegister(username, password) {
    const res = await fetch(import.meta.env.VITE_BASE_API + '/register', {
        method: 'POST',
        body: JSON.stringify({
            username,
            password,
        }),
    });

    const r = await res.json();
    if (!r.success) throw new Error(r.error);
    if (!res.ok) throw new Error(res.statusText);

    localStorage.setItem('token', r.token);
    localStorage.setItem('refresh', r.refreshToken);

    window.location.href = '/dashboard';
}

async function AuthPost(url, data) {
    const res = await fetch(import.meta.env.VITE_BASE_API + url, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
        body: JSON.stringify(data),
    });

    const r = await res.json();
    if (!r.success) throw new Error(r.error);
    if (!res.ok) throw new Error(res.statusText);

    return r;
}

async function AuthGet(url) {
    const res = await fetch(import.meta.env.VITE_BASE_API + url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
    });

    const r = await res.json();
    if (!r.success) throw new Error(r.error);
    if (!res.ok) throw new Error(res.statusText);

    return r;
}

export { AuthPost, AuthGet, PostLogin, PostRegister }
