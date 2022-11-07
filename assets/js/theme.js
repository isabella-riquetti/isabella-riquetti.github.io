function getCurrentTheme() {
    return localStorage.getItem('theme');
}

function updateCurrentTheme(theme = null) {
    const currentTheme = theme ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");
    $("body").removeClass("light");
    $("body").removeClass("dark");
    $("body").addClass(currentTheme);
    localStorage.setItem('theme', currentTheme);
    return currentTheme;
}


$(window).ready(function () {
    $("#checkbox").on("change", function () {
        const switchTheme = getCurrentTheme() == "light" ? "dark" : "light";
        updateCurrentTheme(switchTheme);
        addExperience();
    });
});