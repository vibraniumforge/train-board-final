# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

trains = Train.create([
    {destination: "Paris - Gare du Nord", newtime:"0115", newtime24:"1315", origin: "London - St. Pancras", remarks_boarding: "L 15M", scheduled: "0100", scheduled24: "1300", service: "Eurostar", trainno: "1"},
    {destination: "Brussels - Gare du Midi", newtime:"", newtime24:"", origin: "Paris - Gare du Nord", remarks_boarding: "On Time", scheduled: "0200", scheduled24: "1400", service: "Thalys", trainno: "3"},
    {destination: "Marseilles - St. Charles", newtime:"", newtime24:"", origin: "Paris - Gare de Lyon", remarks_boarding: "On Time", scheduled: "0300", scheduled24: "1500", service: "TGV", trainno: "5"},
    {destination: "Hogwart's Caslte", newtime:"", newtime24:"", origin: "London - King's Cross", remarks_boarding: "On Time", scheduled: "0400", scheduled24: "1600", service: "Hogwart's Express", trainno: "7"},
    {destination: "Beijing", newtime:"", newtime24:"", origin: "Moscow", remarks_boarding: "On Time", scheduled: "0500", scheduled24: "1700", service: "Trans-Siberian Railway", trainno: "9"},
    {destination: "Darwin", newtime:"", newtime24:"", origin: "Adelaide - Parklands Terminal", remarks_boarding: "On Time", scheduled: "0600", scheduled24: "1800", service: "The Ghan", trainno: "11"},
    {destination: "Istanbul - Sirkeci", newtime:"", newtime24:"", origin: "Paris - Gare de l' Est", remarks_boarding: "On Time", scheduled: "0700", scheduled24: "1900", service: "Orient Express", trainno: "13"},
    {destination: "Toronto - Union Station", newtime:"", newtime24:"", origin: "Vancouver Pacific Central Station", remarks_boarding: "On Time", scheduled: "0800", scheduled24: "2000", service: "The Canadian", trainno: "15"},
])