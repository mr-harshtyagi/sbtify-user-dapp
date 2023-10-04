// object containing all the sbts used in the application

export const sbts: { [key: string]: any } = {
  // "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266": {
  //   sbtSymbol: "AUTH",
  //   sbtName: "Authorization Token",
  //   sbtAddress: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  //   tokenId: "001",
  //   sbtFields: [
  //     { title: "Organization Name", type: "string" },
  //     { title: "Category", type: "string" },
  //     { title: "Allowed SBTs", type: "string" },
  //   ],
  //   active: true,
  // },
  "0x70997970C51812dc3A010C7d01b50e0d17dc79C8": {
    sbtSymbol: "EDU",
    sbtName: "Educational ID",
    sbtAddress: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
    tokenId: "002",
    sbtFields: [
      { title: "Holder Name", type: "string" },
      { title: "Institution", type: "string" },
      { title: "Course", type: "string" },
      { title: "Year Of Passing", type: "string" },
      { title: "Grade", type: "string" },
    ],
    active: true,
  },
  "0xd83848Cf45B61D1D9BF934e0360e4844580c67f3": {
    sbtSymbol: "EMP",
    sbtName: "Employee ID",
    sbtAddress: "0xd83848Cf45B61D1D9BF934e0360e4844580c67f3",
    tokenId: "003",
    sbtFields: [
      { title: "ID", type: "number" },
      { title: "Employee", type: "string" },
      { title: "Position", type: "string" },
      { title: "Date Of Joining", type: "string" },
    ],
    active: true,
  },
  "0xdD2FD4581271e230360230F9337D5c0430Bf44C0": {
    sbtSymbol: "SSN",
    sbtName: "National ID",
    sbtAddress: "0xdD2FD4581271e230360230F9337D5c0430Bf44C0",
    tokenId: "004",
    sbtFields: [
      { title: "ID", type: "number" },
      { title: "Holder Name", type: "string" },
      { title: "Gender", type: "string" },
      { title: "Date Of Birth", type: "string" },
    ],
    active: true,
  },
  "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E": {
    sbtSymbol: "PID",
    sbtName: "Passport ID",
    sbtAddress: "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E",
    tokenId: "005",
    sbtFields: [
      { title: "Passport Number", type: "string" },
      { title: "Holder Name", type: "string" },
      { title: "Nationality", type: "string" },
      { title: "Date Of Birth", type: "string" },
      { title: "Gender", type: "string" },
      { title: "Place Of Issue", type: "string" },
      { title: "Date Of Expiry", type: "string" },
    ],
    active: true,
  },
};
