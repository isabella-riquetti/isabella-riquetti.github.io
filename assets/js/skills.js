const COLORS = {
    LIGHT: {
        FONT_COLOR: '#777777',
        GRID: '#e8e8e8',
        BARS: {
            BACKEND_AND_FRAMEWORKS: 'rgb(195,110,195)',
            FRONTEND_AND_FRAMEWORKS: 'rgb(255,155,125)',
            DATABASE: 'rgb(175,160,230)',
            CLOUD: 'rgb(255,210,145)',
            PM_FRAMEWORKS: 'rgb(100,230,150)',
            OTHERS: 'rgb(125,200,215)',
        }
    },
    DARK: {
        FONT_COLOR: 'darkgray',
        GRID: '#525252',
        BARS: {
            BACKEND_AND_FRAMEWORKS: 'rgb(125,40,100)',
            FRONTEND_AND_FRAMEWORKS: 'rgb(145,70,50)',
            DATABASE: 'rgb(60,65,120)',
            CLOUD: 'rgb(196,122,83)',
            PM_FRAMEWORKS: 'rgb(55,115,80)',
            OTHERS: 'rgb(55,105,115)',
        }
    },
}

function addExperience(state) {
    const currentTheme = getCurrentTheme().toUpperCase();
    const ctx = document.getElementById("experience-timeline-canvas").getContext('2d');

    let params = {
        type: "bar",
        data: {
            labels: ['C#', 'Windows Form', '.NET Framework', 'ASP.NET MVC', '.NET Core', 'Javascript', 'Node.js', 'HTML/CSS', 'Angular', 'Vue', 'React', 'SQL', 'MongoDB', 'Aerospike', 'Postgres', 'Azure', 'AWS', 'Scrum', 'Kanban', 'ShapeUp', 'Docker'],
            datasets: [{
                data: [
                    [moment(new Date(2015, 0, 1)).valueOf(), moment(new Date().setHours(0, 0, 0, 0)).valueOf()], //C#
                    [moment(new Date(2015, 0, 1)).valueOf(), moment(new Date(2018, 0, 1)).valueOf()], //Windows Form
                    [moment(new Date(2015, 0, 1)).valueOf(), moment(new Date(2020, 10, 1)).valueOf()], //.NET Framework
                    [moment(new Date(2017, 0, 1)).valueOf(), moment(new Date(2020, 10, 1)).valueOf()], //ASP.NET MVC
                    [moment(new Date(2018, 0, 1)).valueOf(), moment(new Date().setHours(0, 0, 0, 0)).valueOf()], //.NET Core
                    [moment(new Date(2017, 0, 1)).valueOf(), moment(new Date().setHours(0, 0, 0, 0)).valueOf()], //Javascript
                    [moment(new Date(2020, 10, 1)).valueOf(), moment(new Date().setHours(0, 0, 0, 0)).valueOf()], //Node.js
                    [moment(new Date(2017, 0, 1)).valueOf(), moment(new Date().setHours(0, 0, 0, 0)).valueOf()], //HTML/CSS
                    [moment(new Date(2020, 10, 1)).valueOf(), moment(new Date().setHours(0, 0, 0, 0)).valueOf()], //Angular
                    [moment(new Date(2021, 3, 1)).valueOf(), moment(new Date(2022, 3, 1)).valueOf()], //Vue
                    [moment(new Date(2021, 3, 1)).valueOf(), moment(new Date().setHours(0, 0, 0, 0)).valueOf()], // React
                    [moment(new Date(2015, 0, 1)).valueOf(), moment(new Date(2021, 10, 1)).valueOf()], //SQL
                    [moment(new Date(2020, 10, 1)).valueOf(), moment(new Date(2021, 10, 1)).valueOf()], //MongoDB
                    [moment(new Date(2021, 3, 1)).valueOf(), moment(new Date(2022, 3, 1)).valueOf()], //Aerospike
                    [moment(new Date(2021, 3, 1)).valueOf(), moment(new Date().setHours(0, 0, 0, 0)).valueOf()], // Postgres
                    [moment(new Date(2016, 0, 1)).valueOf(), moment(new Date(2021, 10, 1)).valueOf()], //Azure
                    [moment(new Date(2021, 3, 1)).valueOf(), moment(new Date()).valueOf().valueOf()], //AWS
                    [moment(new Date(2016, 5, 1)).valueOf(), moment(new Date().setHours(0, 0, 0, 0)).valueOf()], //Scrum
                    [moment(new Date(2018, 8, 1)).valueOf(), moment(new Date(2020, 10, 1)).valueOf()], //Kanban
                    [moment(new Date(2022, 7, 1)).valueOf(), moment(new Date().setHours(0, 0, 0, 0)).valueOf()], //ShapeUp
                    [moment(new Date(2021, 3, 1)).valueOf(), moment(new Date()).valueOf().valueOf()], //Docker
                ],
                backgroundColor: [
                    COLORS[currentTheme].BARS.BACKEND_AND_FRAMEWORKS,
                    COLORS[currentTheme].BARS.BACKEND_AND_FRAMEWORKS,
                    COLORS[currentTheme].BARS.BACKEND_AND_FRAMEWORKS,
                    COLORS[currentTheme].BARS.BACKEND_AND_FRAMEWORKS,
                    COLORS[currentTheme].BARS.BACKEND_AND_FRAMEWORKS,
                    COLORS[currentTheme].BARS.BACKEND_AND_FRAMEWORKS,
                    COLORS[currentTheme].BARS.BACKEND_AND_FRAMEWORKS,
                    COLORS[currentTheme].BARS.FRONTEND_AND_FRAMEWORKS,
                    COLORS[currentTheme].BARS.FRONTEND_AND_FRAMEWORKS,
                    COLORS[currentTheme].BARS.FRONTEND_AND_FRAMEWORKS,
                    COLORS[currentTheme].BARS.FRONTEND_AND_FRAMEWORKS,
                    COLORS[currentTheme].BARS.DATABASE,
                    COLORS[currentTheme].BARS.DATABASE,
                    COLORS[currentTheme].BARS.DATABASE,
                    COLORS[currentTheme].BARS.DATABASE,
                    COLORS[currentTheme].BARS.CLOUD,
                    COLORS[currentTheme].BARS.CLOUD,
                    COLORS[currentTheme].BARS.PM_FRAMEWORKS,
                    COLORS[currentTheme].BARS.PM_FRAMEWORKS,
                    COLORS[currentTheme].BARS.PM_FRAMEWORKS,
                    COLORS[currentTheme].BARS.OTHERS,
                ],
                borderWidth: 0,
                label: "Duration"
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                title: {
                    display: false,
                },
                tooltip: {
                    position: 'average',
                    yAlign: 'bottom',
                    xAlign: 'center',
                    callbacks: {
                        label: tooltipItem => `${getExperience(tooltipItem.raw[0], tooltipItem.raw[1])} (${getReadbleRange(tooltipItem.raw[0], tooltipItem.raw[1])})`
                    }
                },
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: true
                }
            },
            scales: {
                y: {
                    ticks: {
                        color: COLORS[currentTheme].FONT_COLOR
                    },
                    grid: {
                        color: COLORS[currentTheme].GRID
                    }
                },
                x: {
                    type: 'linear',
                    position: 'left',
                    min: moment(new Date(2015, 0, 1)).valueOf(),
                    max: moment(new Date().setHours(0, 0, 0, 0)).valueOf(),
                    ticks: {
                        color: COLORS[currentTheme].FONT_COLOR,
                        beginAtZero: false,
                        callback: value => getFormattedDateFromEpoch(value)
                    },
                    grid: {
                        color: COLORS[currentTheme].GRID
                    }
                },
            },
        }
    };

    new Chart(ctx, params);
}

function getReadbleRange(start, end) {
    const readbleStart = getFormattedDateFromEpoch(start);
    const readbleEnd = getFormattedDateFromEpoch(end);
    if (readbleEnd === "Today") return `Since ${readbleStart}`;

    return `${readbleStart} - ${readbleEnd}`;
}

function getFormattedDateFromEpoch(epoch) {
    let date = moment(epoch);
    if (date == moment(new Date().setHours(0, 0, 0, 0)).valueOf()) return "Today";
    return date.format('MMM of YYYY');
}

function getExperience(start, end) {
    var readbleExperience = "";
    var daysDiff = (end - start) / 86400000;
    if (daysDiff > 364) {
        let years = Math.floor(daysDiff / 365);
        readbleExperience += `${years} years`;
        daysDiff -= years * 365;
    }
    if (daysDiff > 30) {
        let months = Math.floor(daysDiff / 30);
        if (readbleExperience) readbleExperience += " and ";
        readbleExperience += `${months} months`;
        daysDiff -= months * 30;
    }
    if (!readbleExperience) readbleExperience = "Just starting :)";

    return readbleExperience;
}