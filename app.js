const model = {
    daysInAWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    daysInSchool: 0,
    intervals: [],

    init: (daysInSchool, intervals) => {
        model.daysInSchool = daysInSchool
        model.intervals = [...intervals]
    },
    getGridArea: ({ startTime, day }) => {
        const gridArea = []
        gridArea.push(model.intervals.findIndex(time => time[0] === startTime) + 1)
        gridArea.push(model.daysInAWeek.findIndex(dayInAWeek => dayInAWeek === day) + 1)
        gridArea.push(gridArea[0] + 1)
        gridArea.push(gridArea[1] + 1)
        return gridArea
    }
}

const view = {
    intervals: document.getElementById('intervals'),
    days: document.getElementById('days'),
    content: document.getElementById('content'),

    createSubject: ({ startTime, endTime, name, platform, teacher, type, link }) => {
        const subject = view.createElement('a', '', `subject subject--${type}`)

        const hoursElem = view.createElement('p', `${startTime} - ${endTime}`, 'subject__hour')
        subject.appendChild(hoursElem)

        const nameElem = view.createElement('h3', name, 'subject__name')
        subject.appendChild(nameElem)

        const platformElem = view.createElement('p', platform, 'subject__platform')
        subject.appendChild(platformElem)

        const teacherElem = view.createElement('p', teacher, '')
        subject.appendChild(teacherElem)

        const typeElem = view.createElement('span', type, 'subject__type')
        subject.appendChild(typeElem)

        subject.href = link
        subject.target = '_blank'

        return subject
    },
    placeSubject: (subject, gridArea) => {
        subject.style.gridArea = gridArea.join(' / ')
        view.content.appendChild(subject)
    },
    generateIntervals: lessonTimes => {
        for (let i = 0; i < lessonTimes.length; i++) {
            const hourElem = view.createElement('div', '', 'timetable__hour')
            hourElem.appendChild(view.createElement('p', lessonTimes[i][0], ''))
            hourElem.appendChild(view.createElement('p', lessonTimes[i][1], ''))
            intervals.appendChild(hourElem)
        }
    },
    generateDays: (daysNumber, days) => {
        for (let i = 0; i < daysNumber; i++) {
            view.days.appendChild(view.createElement('p', days[i], ''))
        }
    },
    createElement: (type, text, cssClass) => {
        const paragraph = document.createElement(type)
        paragraph.className = cssClass
        paragraph.textContent = text
        return paragraph
    }
}

import config from './config.js'
const controller = {
    init: () => {
        model.init(config.daysInAWeek, config.intervals)

        view.generateDays(model.daysInSchool, model.daysInAWeek)
        view.generateIntervals(model.intervals)

        config.subjects.forEach(subject => view.placeSubject(view.createSubject(subject), model.getGridArea(subject)))
    }
}

controller.init()
