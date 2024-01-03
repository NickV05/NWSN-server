var express = require("express");
var router = express.Router();
const Form = require('../models/Forms')

router.post("/memberForm", (req, res, next) => {
console.log("Req.body ===>", req.body)

Form.create({
  type:"MemberForm",
  organizationName: req.body.organizationInfo.organizationName,
  taxId: req.body.organizationInfo.taxId,
  address1: req.body.organizationInfo.address1,
  address2: req.body.organizationInfo.address2,
  city: req.body.organizationInfo.city,
  state: req.body.organizationInfo.state,
  postalCode: req.body.organizationInfo.postalCode,
  workPhone: req.body.organizationInfo.workPhone,
  email: req.body.organizationInfo.email,
  website: req.body.organizationInfo.website,
  firstName: req.body.mainContactInfo.firstName,
  lastName: req.body.mainContactInfo.lastName,
  title: req.body.mainContactInfo.title,
  contactWorkPhone: req.body.mainContactInfo.contactWorkPhone,
  contactEmail: req.body.mainContactInfo.contactEmail,
  dayShelter: req.body.membershipEligibility.dayShelter,
  overnightShelter: req.body.membershipEligibility.overnightShelter,
  safeHaven: req.body.membershipEligibility.safeHaven,
  safeHavenDescription: req.body.membershipEligibility.safeHavenDescription,
  maternityPrograms: req.body.membershipEligibility.maternityPrograms,
  youthShelters: req.body.membershipEligibility.youthShelters,
  domesticViolenceShelters: req.body.membershipEligibility.domesticViolenceShelters,
  flexShelters: req.body.membershipEligibility.flexShelters,
  hybridTransitionalShelters: req.body.membershipEligibility.hybridTransitionalShelters,
  programsExperiencingHomelessness: req.body.membershipEligibility.programsExperiencingHomelessness,
  genderBasedViolencePrograms: req.body.membershipEligibility.genderBasedViolencePrograms,
  other: req.body.membershipEligibility.other,
  otherDescription: req.body.membershipEligibility.otherDescription,
  scope: req.body.membershipEligibility.scope,
  scopeDescription: req.body.membershipEligibility.scopeDescription,
  fees: req.body.additionalInfo.fees,
  feesDescription: req.body.additionalInfo.feesDescription,
  pay: req.body.additionalInfo.pay,
  howManyLocations: req.body.additionalInfo.howManyLocations,
  howManyShelters: req.body.additionalInfo.howManyShelters,
  howManyBedNights: req.body.additionalInfo.howManyBedNights,
  units: req.body.additionalInfo.units,
  meals: req.body.additionalInfo.meals,
  counseling: req.body.additionalInfo.counseling,
  types: req.body.additionalInfo.types,
  women: req.body.additionalInfo.women,
  children: req.body.additionalInfo.children,
  association: req.body.additionalInfo.association,
  mission: req.body.additionalInfo.mission,
  becomeMembers: req.body.additionalInfo.becomeMembers,
  sheltering: req.body.additionalInfo.sheltering,
  howManyMembers: req.body.additionalInfo.howManyMembers,
  name: req.body.name,
  pending:true
})
.then(() => {
  res.status(200).json({ message: "Success" });
})
.catch((err) => {
  console.log(err);
  res.status(500).json({ message: "Internal Server Error" });
});
})


router.post("/partnerForm", (req, res, next) => {
  console.log("Req.body ===>", req.body)
  
  Form.create({
    type:"PartnerForm",
    organizationName: req.body.organizationInfo.organizationName,
    taxId: req.body.organizationInfo.taxId,
    address1: req.body.organizationInfo.address1,
    address2: req.body.organizationInfo.address2,
    city: req.body.organizationInfo.city,
    state: req.body.organizationInfo.state,
    postalCode: req.body.organizationInfo.postalCode,
    workPhone: req.body.organizationInfo.workPhone,
    email: req.body.organizationInfo.email,
    website: req.body.organizationInfo.website,
    firstName: req.body.mainContactInfo.firstName,
    lastName: req.body.mainContactInfo.lastName,
    title: req.body.mainContactInfo.title,
    contactWorkPhone: req.body.mainContactInfo.contactWorkPhone,
    contactEmail: req.body.mainContactInfo.contactEmail,
    additionalInfo:req.body.additionalInfo,
    name: req.body.name,
    pending:true
  })
  .then(() => {
    res.status(200).json({ message: "Success" });
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  });
  })

  router.post("/volunteerForm", (req, res, next) => {
    console.log("Req.body ===>", req.body)
    
    Form.create({
      type:"VolunteerForm",
      firstName: req.body.organizationInfo.firstName,
      lastName: req.body.organizationInfo.lastName,
      address1: req.body.organizationInfo.address1,
      address2: req.body.organizationInfo.address2,
      city: req.body.organizationInfo.city,
      state: req.body.organizationInfo.state,
      postalCode: req.body.organizationInfo.postalCode,
      workPhone: req.body.organizationInfo.phone,
      email: req.body.organizationInfo.email,
      interest:req.body.additionalInfo.interest,
      skills: req.body.additionalInfo.skills,
      computer: req.body.additionalInfo.computer,
      time:req.body.additionalInfo.time,
      remote:req.body.additionalInfo.remote,
      travel:req.body.additionalInfo.travel,
      add:req.body.additionalInfo.add,
      source:req.body.additionalInfo.source,
      name: req.body.name,
      pending:true
    })
    .then(() => {
      res.status(200).json({ message: "Success" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    });
    })

    router.get("/getForms",(req,res,next)=>{
      Form.find()
      .then((forms) => {
        res.json(forms)})
    })


module.exports = router;