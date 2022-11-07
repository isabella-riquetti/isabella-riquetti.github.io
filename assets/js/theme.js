function getCurrentTheme() {
    return localStorage.getItem('theme');
}

function updateCurrentTheme() {
    const currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
    $("body").removeClass("light");
    $("body").removeClass("dark");
    $("body").addClass(currentTheme);
    localStorage.setItem('theme', currentTheme);
    return currentTheme;
}