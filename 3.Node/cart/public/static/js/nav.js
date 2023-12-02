const logout = async () => {
    const resp = await fetch("/api/auth/logout");
    const data = await resp.json();
    alert("Logout done");
    window.location = "/";
};