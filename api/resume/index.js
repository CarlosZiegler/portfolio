const Cors = require('micro-cors')

const cors = Cors({
    allowedMethods: ['GET']
})

async function Test(req, res) {

    return res.json({
        personalDetails: {
            firstName: "Carlos",
            lastName: "Ziegler",
            email: "carlos.ziegler@gmail.com",
            phoneNumber: "+491727572563",
            links: {
                github: "https://github.com/carlosziegler",
                linkedin: "https://linkedin.com/in/carlos",
                website: "https://carlosziegler.now.sh/",
                other: ""
            }
        },
        professionalSummary: "Erstellen von Websites und Anwendungen mit HTML, CSS und JavaScript mithilfe der neuesten Javascript-Frontend-Frameworks wie ReactJS und GatsbyJS , sowie API mit NodeJS und CSS-Framework wie Bootstrap. Junior Web Developer sucht eine Stelle in einem Technologieunternehmen.",
        employeehistory: [
            {
                jobTitle: "Praktikum als Web Entwickler",
                employer: "Visyu Solution",
                start: "Mar,2019",
                end: "Oct,2019",
                city: "Berlin",
                description: "Webentwicklung im Bereich Front‑ und Backend (u.a. mit PHP, HTML/CSS, JavaScript, NodeJS) , Umsetzung von Webseiten mit Hilfe von bestehender Frameworks und Content Managements Systemen. Einarbeitung in neue Tools (u.a. Git, Docker, PhpStorm, Apache/MySQL/PHP, Ubuntu), Fehlerbehebung in bestehenden und neuen Anwendungen."
            },
            {
                jobTitle: "Freiwilligendienst als Sport-Trainer Brasilien Jiu Jitsu",
                employer: "Sporttreff Karower Dachse",
                start: "May, 2016",
                end: "Sep, 2017",
                city: "Berlin",
                description: "Brasilien Jiu Jitsu Kampfsport Trainer"
            },
            {
                jobTitle: "Produktionsleiter",
                employer: "Der Magnetmann",
                start: "Apr, 2015",
                end: "Aug, 2015",
                city: "Berlin",
                description: "Berlin"
            },
            {
                jobTitle: "Digitaldrucker",
                employer: "Aeroarte",
                start: "Feb, 2004",
                end: "Mar, 2015",
                city: "Uniao da Vitoria - Brasilien",
                description: "Bildverarbeitung mit Adobe Photoshop, Koordinator der Gruppenarbeit, Organisation der Arbeit, Entwicklung und Verbesserung der Bildbibliotheken, Planung und Optimierung des Arbeitsablaufs. Großformat‑Bilddruck und Batch‑Bildverarbeitung."
            },
            {
                jobTitle: "Praktikant im Büro",
                employer: "Sanepar",
                start: "Mar, 2001",
                end: "Dec, 2002",
                city: "Porto Uniao - Brasilien",
                description: "Sanepar, Porto União ‑ Brasilien Kommunikation via Mail, Telefon oder Post, die Kontrolle von Eingangsrechnungen, die Erstellung von Ausgangsrechnungen, diverse Schriftsätze."
            },
        ],
        education: [
            {
                schoolName: "COMCAVE.COLLEGE® GmbH",
                degree: "Umschulung zum Fachinformatiker Anwendungsentwicklung",
                start: "Feb, 2018",
                end: "Feb, 2020",
                city: "Berlin",
                description: "Konzeptionierung, Planung und Umsetzung von prozeduralen und objektorientierten Anwendungen, Codierung in Java und SQL, Testfälle erstellen und Tests durchführen, erkennen und beheben von Programmfehlern, Erstellung von Datenbanken und netzwerkbasierten Anwendungen."
            },
            {
                schoolName: "Faculdades Integradas Vale do Iguacu",
                degree: "Bachelor - - Abbruch nach 6 Semester wegen Arbeitsmöglichkeit im Deutschland ",
                start: "Feb, 2012",
                end: "Dec, 2014",
                city: "Uniao da Vitoria - Brasilien",
                description: "Konzeptionierung, Planung und Umsetzung von prozeduralen und objektorientierten Anwendungen, Codierung von Anwendungen in Delphi, PHP, Javascript, Datenbank. - Abbruch nach 6 Semester wegen Arbeitsmöglichkeit im Deutschland"
            },
            {
                schoolName: "Staatliche Schule São Cristovão",
                degree: "Sekundarschule",
                start: "Jan, 1996",
                end: "Dec, 2001",
                city: "Uniao da Vitória - Brasilien",
                description: ""
            },
            {
                schoolName: "Staatliche Schule Dário Bordin",
                degree: "Grundschule",
                start: "Jan, 1990",
                end: "Dec, 1995",
                city: "Uniao da Vitória – Brasilien",
                description: ""
            },
        ],
        skills: [
            "HTML",
            "CSS",
            "Javascript",
            "ES6",
            "Bootstrap",
            "NodeJs",
            "Git",
            "Docker",
            "ReactJs",
            "GatsbyJs",
            "Figma",
            "SQL"
        ],
        languages: [
            {
                language: "portugiesisch",
                level: "native"
            },
            {
                language: "deutsch",
                level: "b2"
            },
            {
                language: "english",
                level: "a2"
            },
        ],
        courses: [
            {
                courseName: "Sprachkurs Deutsch B1",
                institutionName: "System-Data Schulungs- und Beratungsgesellschaft GMBH",
                start: "Oct, 2015",
                end: "Apr, 2016",
            },
            {
                courseName: "Sprachkurs Deutsch A2 + von Beruf",
                institutionName: "Hartnackschule",
                start: "Sep, 2016",
                end: "Mar, 2017",
            },
            {
                courseName: "Sprachkurs Deutsch B2",
                institutionName: "WIPA GmbH",
                start: "Mar, 2017",
                end: "Jul, 2017",
            },
            {
                courseName: "Responsive Web Design",
                institutionName: "freecodecamp.org",
                start: "Aug, 2019",
                end: "Sep, 2019",
            },
            {
                courseName: "NodeJS Anfanger",
                institutionName: "EW.IT",
                start: "Dec, 2019",
                end: "Dec, 2019",
            },
        ]


    })
}

module.exports = cors(Test)