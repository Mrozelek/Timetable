export default {
    daysInAWeek: 4,
    intervals: [
        ['7:30', '9:00'],
        ['9:15', '11:00'],
        ['11:15', '13:00'],
        ['13:15', '15:00'],
        ['15:15', '16:55']
    ],
    subjects: [
        {
            startTime: '7:30',
            endTime: '9:00',
            day: 'Wednesday',
            name: 'Nazwa Przedmiotu 1',
            platform: 'Zoom',
            teacher: 'Jan Jankowiak',
            type: 'l',
            link: '#'
        },
        {
            startTime: '9:15',
            endTime: '11:00',
            day: 'Monday',
            name: 'Nazwa Przedmiotu 2',
            platform: 'MS Teams',
            teacher: 'Imię Nazwisko',
            type: 'p',
            link: '#'
        }
    ]
}
