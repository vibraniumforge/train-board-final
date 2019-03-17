const nameHelper = name => {
  switch (name) {
    case "Sunset Ltd.":
      return "Sunset Limited";
    case "SW Chief":
      return "Southwest Chief";
    case "Cal. Zephyr":
      return "California Zephyr";
    case "Empire Bldr.":
      return "Empire Builder";
    case "Coast Star":
      return "Coast Starlight";
    case "EB Portland":
      return "Empire Builder - Portland";
    case "Sil. Meteor":
      return "Silver Meteor";

    case "PAC SURFLNR":
      return "Pacific Surfliner";
    case "Acela Expr.":
      return "Acela Express";
    case "Lincoln S.":
      return "Lincoln Service";
    case "C. Sandburg":
      return "Carl Sandburg";
    case "Pennsylvan.":
      return "Pennsylvanian";
    case "City of N O":
      return "City of New Orleans";
    case "Lake S. Ltd.":
      return "Lake Shore Limited";
    case "Ill. Zephyr":
      return "Illinois Zephyr";
    case "Empire Serv.":
      return "Empire Service";
    case "LSL Boston":
      return "Lake Shore Limited - Boston";
    case "Pere Marq.":
      return "Pere Marquette";
    case "C. Corridor":
      return "Capitol Corridor";
    case "Capitol Ltd.":
      return "Capitol Limited";
    case "Hoosier St.":
      return "Hoosier State";
    case "Riv. Runner":
      return "River Runner";
    case "S. Disrupt":
      return "Service Disruption";
    default:
      return name;
  }
};

export { nameHelper };
