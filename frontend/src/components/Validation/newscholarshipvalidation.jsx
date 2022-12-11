

export const Newscholarshipvalidation = (newscholarship) => {
    const scholarshiperrors={}
    if(!newscholarship.uniname){
        scholarshiperrors.uniname="University name needed"
    }
    if(!newscholarship.discountofscholarship){
        scholarshiperrors.discountofscholarship='Set the Scholarship discount'
    }
    if(!newscholarship.vdateofscholarship){
        scholarshiperrors.vdateofscholarship='Date needed'
    }
    if(!newscholarship.descriptionofscholarship){
        scholarshiperrors.descriptionofscholarship="Give a short Description about scholarship"
    }
    if(!newscholarship.eligibilityofscholarship){
        scholarshiperrors.eligibilityofscholarship='Min 2 Eligibility needed'
    }
    if(!newscholarship.benefitsofscholarship){
        scholarshiperrors.benefitsofscholarship='Min 2 Eligibility needed'
    }
    if(!newscholarship.Scholarshipopenfor){
        scholarshiperrors.Scholarshipopenfor="Filed needed"
    }
    if(!newscholarship.address){
        scholarshiperrors.address="Location required"
    }
  return scholarshiperrors
}
