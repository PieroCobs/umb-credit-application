import { AccountType, BusinessType, Credit, Facility } from "@/types/credit";

const getDateString = (dateString: string) =>{
   const dateTime = new Date(dateString);
   return dateTime;
}

const applicationList: Credit[] =[
   {
      "_id": "63d82ff30fdf3a0f14161647",
      "applicationId": "UMB/CF/01/2023",
      "accountNumber": 50645059791,
      "accountName": "Twiggery Xplor",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2017-12-24T08:44:19"),
      "dateBusinessEstablished": getDateString("2020-10-11T12:29:48"),
      "applicationDate": getDateString("2022-03-17T03:22:25"),
      "businessSector": "hospitality",
      "businessType": BusinessType.Partnership,
      "mainBusinessLocation": "989 Sheffield Avenue, Dodge, Alaska",
      "contactPersonTelNumber": "+233 (931) 421-3542",
      "facilityType": Facility.RevolvingCredit,
      "psrScore": 0.9,
      "shareholders": [
         {
            "name": "Jolene Kelly",
            "sharePercentage": 90
         },
         {
            "name": "Tyler King",
            "sharePercentage": 45
         }
      ]
   },
   {
      "_id": "63d82ff36a997a766533a5e3",
      "applicationId": "UMB/CF/011/2018",
      "accountNumber": 29050624568,
      "accountName": "Illumity Scentric",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2019-06-10T08:49:06"),
      "dateBusinessEstablished": getDateString("2011-08-09T01:07:15"),
      "applicationDate": getDateString("2022-01-26T08:21:36"),
      "businessSector": "textiles",
      "businessType": BusinessType.Cooperative,
      "mainBusinessLocation": "171 Harrison Avenue, Cetronia, New Hampshire",
      "contactPersonTelNumber": "+233 (836) 558-2475",
      "facilityType": Facility.DeferredPaymentPlan,
      "psrScore": 0.8,
      "shareholders": [
         {
            "name": "Valenzuela Durham",
            "sharePercentage": 23
         },
         {
            "name": "Rasmussen Grant",
            "sharePercentage": 56
         }
      ]
   },
   {
      "_id": "63d82ff3ec3646b110110d31",
      "applicationId": "UMB/CF/05/2021",
      "accountNumber": 47413020335,
      "accountName": "Zuvy Geekfarm",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2019-05-22T11:54:14"),
      "dateBusinessEstablished": getDateString("2010-03-04T08:20:35"),
      "applicationDate": getDateString("2022-04-18T10:30:10"),
      "businessSector": "finance",
      "businessType": BusinessType.Corporation,
      "mainBusinessLocation": "761 Chapel Street, Coaldale, Connecticut",
      "contactPersonTelNumber": "+233 (979) 549-2143",
      "facilityType": Facility.LineOfCredit,
      "psrScore": 0.4,
      "shareholders": [
         {
            "name": "Callie Clarke",
            "sharePercentage": 49
         },
         {
            "name": "Emilia Dunlap",
            "sharePercentage": 3
         }
      ]
   },
   {
      "_id": "63d82ff335c6bd60f1b5fbd5",
      "applicationId": "UMB/CF/07/2019",
      "accountNumber": 23375812736,
      "accountName": "Dreamia Enquility",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2019-04-14T01:57:29"),
      "dateBusinessEstablished": getDateString("2010-09-22T06:19:49"),
      "applicationDate": getDateString("2022-10-24T09:09:55"),
      "businessSector": "agriculture",
      "businessType": BusinessType.SoleProprietorship,
      "mainBusinessLocation": "321 Brooklyn Avenue, Otranto, North Carolina",
      "contactPersonTelNumber": "+233 (987) 468-2839",
      "facilityType": Facility.SwinglineLoan,
      "psrScore": 1,
      "shareholders": [
         {
            "name": "Spencer Chaney",
            "sharePercentage": 11
         },
         {
            "name": "Contreras Mckenzie",
            "sharePercentage": 9
         }
      ]
   },
   {
      "_id": "63d82ff3c55846ab3918b885",
      "applicationId": "UMB/CF/04/2022",
      "accountNumber": 87172483909,
      "accountName": "Inrt Tasmania",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2018-01-02T03:45:40"),
      "dateBusinessEstablished": getDateString("2017-12-12T07:37:24"),
      "applicationDate": getDateString("2022-06-22T11:20:31"),
      "businessSector": "hospitality",
      "businessType": BusinessType.Cooperative,
      "mainBusinessLocation": "819 Hale Avenue, Deseret, Mississippi",
      "contactPersonTelNumber": "+233 (973) 432-2858",
      "facilityType": Facility.DeferredPaymentPlan,
      "psrScore": 0.6,
      "shareholders": [
         {
            "name": "Brandie Keller",
            "sharePercentage": 17
         },
         {
            "name": "Rochelle Cantrell",
            "sharePercentage": 52
         }
      ]
   },
   {
      "_id": "63d82ff365b5b8a3766b2b01",
      "applicationId": "UMB/CF/012/2018",
      "accountNumber": 26374577125,
      "accountName": "Kineticut Snowpoke",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2021-11-27T12:45:35"),
      "dateBusinessEstablished": getDateString("2021-12-20T03:14:15"),
      "applicationDate": getDateString("2022-09-30T04:12:58"),
      "businessSector": "construction",
      "businessType": BusinessType.Corporation,
      "mainBusinessLocation": "460 McKinley Avenue, Southview, Kentucky",
      "contactPersonTelNumber": "+233 (915) 540-2890",
      "facilityType": Facility.LetterOfCredit,
      "psrScore": 0.1,
      "shareholders": [
         {
            "name": "Stacie Howard",
            "sharePercentage": 43
         },
         {
            "name": "Jacquelyn Lewis",
            "sharePercentage": 60
         }
      ]
   },
   {
      "_id": "63d82ff3b99607cbc1aa2859",
      "applicationId": "UMB/CF/08/2023",
      "accountNumber": 17426379405,
      "accountName": "Futuris Playce",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2023-01-26T11:01:09"),
      "dateBusinessEstablished": getDateString("2016-03-28T02:25:59"),
      "applicationDate": getDateString("2022-06-14T04:52:43"),
      "businessSector": "mining",
      "businessType": BusinessType.Corporation,
      "mainBusinessLocation": "735 Stillwell Avenue, Blodgett, American Samoa",
      "contactPersonTelNumber": "+233 (945) 488-2721",
      "facilityType": Facility.RevolvingCredit,
      "psrScore": 0.9,
      "shareholders": [
         {
            "name": "Oneil Marshall",
            "sharePercentage": 80
         },
         {
            "name": "Jerry Kennedy",
            "sharePercentage": 47
         }
      ]
   },
   {
      "_id": "63d82ff34dc456f07a2c3557",
      "applicationId": "UMB/CF/01/2023",
      "accountNumber": 46041550736,
      "accountName": "Frenex Calcu",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2020-12-08T08:27:33"),
      "dateBusinessEstablished": getDateString("2017-08-07T08:32:57"),
      "applicationDate": getDateString("2022-10-28T03:37:26"),
      "businessSector": "textiles",
      "businessType": BusinessType.SoleProprietorship,
      "mainBusinessLocation": "999 Clinton Street, Cartwright, Maryland",
      "contactPersonTelNumber": "+233 (946) 431-2130",
      "facilityType": Facility.OverdraftService,
      "psrScore": 0.3,
      "shareholders": [
         {
            "name": "Deanne Jones",
            "sharePercentage": 15
         },
         {
            "name": "Elvia Huber",
            "sharePercentage": 81
         }
      ]
   },
   {
      "_id": "63d82ff3bf1f32e890f5bed9",
      "applicationId": "UMB/CF/012/2019",
      "accountNumber": 16062399227,
      "accountName": "Moltonic Zilencio",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2020-07-21T07:41:45"),
      "dateBusinessEstablished": getDateString("2011-01-25T08:10:33"),
      "applicationDate": getDateString("2023-01-03T05:05:08"),
      "businessSector": "food",
      "businessType": BusinessType.Corporation,
      "mainBusinessLocation": "462 Elliott Place, Loma, Illinois",
      "contactPersonTelNumber": "+233 (959) 552-3714",
      "facilityType": Facility.DeferredPaymentPlan,
      "psrScore": 0.8,
      "shareholders": [
         {
            "name": "Latoya Rios",
            "sharePercentage": 96
         },
         {
            "name": "Marisa Sandoval",
            "sharePercentage": 86
         }
      ]
   },
   {
      "_id": "63d82ff327a8b3859c427bd7",
      "applicationId": "UMB/CF/04/2021",
      "accountNumber": 13436178695,
      "accountName": "Glasstep Bluplanet",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2020-09-26T08:05:13"),
      "dateBusinessEstablished": getDateString("2022-12-09T04:22:08"),
      "applicationDate": getDateString("2022-11-27T09:22:13"),
      "businessSector": "media",
      "businessType": BusinessType.Partnership,
      "mainBusinessLocation": "543 Ingraham Street, Tilleda, Wyoming",
      "contactPersonTelNumber": "+233 (839) 487-3929",
      "facilityType": Facility.LineOfCredit,
      "psrScore": 0.8,
      "shareholders": [
         {
            "name": "Rosalie Reid",
            "sharePercentage": 39
         },
         {
            "name": "Ross Peck",
            "sharePercentage": 59
         }
      ]
   },
   {
      "_id": "63d82ff36d2ca1275986b1b0",
      "applicationId": "UMB/CF/08/2018",
      "accountNumber": 47122525601,
      "accountName": "Ultrimax Colaire",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2021-11-07T08:44:25"),
      "dateBusinessEstablished": getDateString("2009-08-21T06:37:37"),
      "applicationDate": getDateString("2022-09-28T07:30:21"),
      "businessSector": "hospitality",
      "businessType": BusinessType.Partnership,
      "mainBusinessLocation": "683 Olive Street, Alfarata, Marshall Islands",
      "contactPersonTelNumber": "+233 (994) 598-3163",
      "facilityType": Facility.RevolvingCredit,
      "psrScore": 0.3,
      "shareholders": [
         {
            "name": "Figueroa Zimmerman",
            "sharePercentage": 35
         },
         {
            "name": "Underwood Burch",
            "sharePercentage": 45
         }
      ]
   },
   {
      "_id": "63d82ff39d098e6a02666850",
      "applicationId": "UMB/CF/05/2019",
      "accountNumber": 78733546597,
      "accountName": "Quordate Ceprene",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2014-06-01T11:47:14"),
      "dateBusinessEstablished": getDateString("2006-01-10T05:53:56"),
      "applicationDate": getDateString("2022-07-05T10:10:48"),
      "businessSector": "mining",
      "businessType": BusinessType.Corporation,
      "mainBusinessLocation": "400 Rockaway Avenue, Warren, Kansas",
      "contactPersonTelNumber": "+233 (845) 511-2515",
      "facilityType": Facility.SwinglineLoan,
      "psrScore": 0.6,
      "shareholders": [
         {
            "name": "Durham Henderson",
            "sharePercentage": 67
         },
         {
            "name": "Berg Bryant",
            "sharePercentage": 38
         }
      ]
   },
   {
      "_id": "63d82ff3cc761d62c5559733",
      "applicationId": "UMB/CF/09/2019",
      "accountNumber": 57642959825,
      "accountName": "Musix Manufact",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2019-08-22T10:40:13"),
      "dateBusinessEstablished": getDateString("2015-04-09T03:47:51"),
      "applicationDate": getDateString("2022-07-02T10:09:24"),
      "businessSector": "education",
      "businessType": BusinessType.Corporation,
      "mainBusinessLocation": "301 Dorset Street, Enetai, Montana",
      "contactPersonTelNumber": "+233 (890) 481-3242",
      "facilityType": Facility.RevolvingCredit,
      "psrScore": 0.4,
      "shareholders": [
         {
            "name": "Marsh Mayer",
            "sharePercentage": 87
         },
         {
            "name": "Juanita Yates",
            "sharePercentage": 94
         }
      ]
   },
   {
      "_id": "63d82ff3225bed6f33cc26a9",
      "applicationId": "UMB/CF/07/2020",
      "accountNumber": 31905171373,
      "accountName": "Miracula Cinesanct",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2018-02-20T09:50:04"),
      "dateBusinessEstablished": getDateString("2015-10-08T09:48:11"),
      "applicationDate": getDateString("2022-11-02T07:08:23"),
      "businessSector": "agriculture",
      "businessType": BusinessType.SoleProprietorship,
      "mainBusinessLocation": "572 Dearborn Court, Sardis, Nebraska",
      "contactPersonTelNumber": "+233 (917) 459-2576",
      "facilityType": Facility.DeferredPaymentPlan,
      "psrScore": 0.1,
      "shareholders": [
         {
            "name": "Penelope Sanford",
            "sharePercentage": 55
         },
         {
            "name": "Cecilia Camacho",
            "sharePercentage": 37
         }
      ]
   },
   {
      "_id": "63d82ff3f134e9cfe2676065",
      "applicationId": "UMB/CF/011/2023",
      "accountNumber": 68746277684,
      "accountName": "Ginkle Turnabout",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2020-05-21T06:16:16"),
      "dateBusinessEstablished": getDateString("2018-08-15T06:59:04"),
      "applicationDate": getDateString("2023-01-21T11:10:50"),
      "businessSector": "commerce",
      "businessType": BusinessType.Cooperative,
      "mainBusinessLocation": "820 Strauss Street, Robinson, Indiana",
      "contactPersonTelNumber": "+233 (960) 432-2462",
      "facilityType": Facility.TermLoan,
      "psrScore": 0.6,
      "shareholders": [
         {
            "name": "Iris Ellis",
            "sharePercentage": 16
         },
         {
            "name": "Marshall Cunningham",
            "sharePercentage": 37
         }
      ]
   },
   {
      "_id": "63d82ff32020cecf23aeaacd",
      "applicationId": "UMB/CF/011/2021",
      "accountNumber": 31356756533,
      "accountName": "Amtas Hairport",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2017-05-20T07:37:02"),
      "dateBusinessEstablished": getDateString("2015-07-28T11:06:18"),
      "applicationDate": getDateString("2022-01-21T08:22:58"),
      "businessSector": "education",
      "businessType": BusinessType.SoleProprietorship,
      "mainBusinessLocation": "749 Schweikerts Walk, Warsaw, Arkansas",
      "contactPersonTelNumber": "+233 (956) 539-3488",
      "facilityType": Facility.LineOfCredit,
      "psrScore": 0.1,
      "shareholders": [
         {
            "name": "Browning Romero",
            "sharePercentage": 78
         },
         {
            "name": "Hendricks Cortez",
            "sharePercentage": 10
         }
      ]
   },
   {
      "_id": "63d82ff383d3d71ea8dacb32",
      "applicationId": "UMB/CF/07/2020",
      "accountNumber": 13588561072,
      "accountName": "Qimonk Medicroix",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2020-11-22T03:01:57"),
      "dateBusinessEstablished": getDateString("2006-02-13T02:41:02"),
      "applicationDate": getDateString("2023-01-09T01:09:47"),
      "businessSector": "commerce",
      "businessType": BusinessType.Corporation,
      "mainBusinessLocation": "509 Llama Court, Dennard, Georgia",
      "contactPersonTelNumber": "+233 (980) 484-2528",
      "facilityType": Facility.OverdraftService,
      "psrScore": 0.7,
      "shareholders": [
         {
            "name": "Monica Jimenez",
            "sharePercentage": 72
         },
         {
            "name": "Key Manning",
            "sharePercentage": 62
         }
      ]
   },
   {
      "_id": "63d82ff36cb49c4338556eeb",
      "applicationId": "UMB/CF/07/2020",
      "accountNumber": 21251181116,
      "accountName": "Dogtown Sarasonic",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2017-02-22T05:11:03"),
      "dateBusinessEstablished": getDateString("2020-08-25T03:37:39"),
      "applicationDate": getDateString("2022-12-03T08:36:19"),
      "businessSector": "agriculture",
      "businessType": BusinessType.Partnership,
      "mainBusinessLocation": "388 Oak Street, Cawood, Louisiana",
      "contactPersonTelNumber": "+233 (919) 443-3025",
      "facilityType": Facility.TermLoan,
      "psrScore": 0.9,
      "shareholders": [
         {
            "name": "Talley Sexton",
            "sharePercentage": 49
         },
         {
            "name": "Mabel Tyson",
            "sharePercentage": 83
         }
      ]
   },
   {
      "_id": "63d82ff3a78ece3226e717fa",
      "applicationId": "UMB/CF/05/2018",
      "accountNumber": 70263191541,
      "accountName": "Zillacon Decratex",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2014-10-17T01:56:36"),
      "dateBusinessEstablished": getDateString("2018-09-18T04:05:54"),
      "applicationDate": getDateString("2022-03-28T05:40:23"),
      "businessSector": "oil and gas",
      "businessType": BusinessType.LimitedLiability,
      "mainBusinessLocation": "903 Roder Avenue, Nadine, Texas",
      "contactPersonTelNumber": "+233 (839) 540-2798",
      "facilityType": Facility.LetterOfCredit,
      "psrScore": 0.7,
      "shareholders": [
         {
            "name": "Cathleen Reeves",
            "sharePercentage": 25
         },
         {
            "name": "Berry Harrison",
            "sharePercentage": 14
         }
      ]
   },
   {
      "_id": "63d82ff39332c3a9540f2fa7",
      "applicationId": "UMB/CF/06/2020",
      "accountNumber": 70723369674,
      "accountName": "Digifad Gluid",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2021-03-27T06:03:28"),
      "dateBusinessEstablished": getDateString("2022-03-15T02:15:06"),
      "applicationDate": getDateString("2023-01-29T02:04:36"),
      "businessSector": "finance",
      "businessType": BusinessType.SoleProprietorship,
      "mainBusinessLocation": "442 Diamond Street, Galesville, South Dakota",
      "contactPersonTelNumber": "+233 (831) 440-3603",
      "facilityType": Facility.DeferredPaymentPlan,
      "psrScore": 0.7,
      "shareholders": [
         {
            "name": "Ofelia Cote",
            "sharePercentage": 34
         },
         {
            "name": "Moss George",
            "sharePercentage": 9
         }
      ]
   },
   {
      "_id": "63d82ff3bb3fda17a3cbe31b",
      "applicationId": "UMB/CF/010/2019",
      "accountNumber": 80135911718,
      "accountName": "Cytrex Naxdis",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2016-12-14T04:18:26"),
      "dateBusinessEstablished": getDateString("2012-03-29T10:34:22"),
      "applicationDate": getDateString("2022-07-22T06:23:38"),
      "businessSector": "food",
      "businessType": BusinessType.Cooperative,
      "mainBusinessLocation": "670 Clinton Avenue, Titanic, Alabama",
      "contactPersonTelNumber": "+233 (820) 459-3235",
      "facilityType": Facility.SwinglineLoan,
      "psrScore": 1,
      "shareholders": [
         {
            "name": "Tammie Carrillo",
            "sharePercentage": 30
         },
         {
            "name": "Meagan Bryan",
            "sharePercentage": 64
         }
      ]
   },
   {
      "_id": "63d82ff3c3d7948ab76f591d",
      "applicationId": "UMB/CF/03/2021",
      "accountNumber": 40134342847,
      "accountName": "Geoform Genmex",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2020-03-26T12:40:01"),
      "dateBusinessEstablished": getDateString("2012-07-20T11:30:38"),
      "applicationDate": getDateString("2022-12-25T10:35:56"),
      "businessSector": "hospitality",
      "businessType": BusinessType.Cooperative,
      "mainBusinessLocation": "823 Amber Street, Elfrida, Ohio",
      "contactPersonTelNumber": "+233 (961) 580-3050",
      "facilityType": Facility.LineOfCredit,
      "psrScore": 0.7,
      "shareholders": [
         {
            "name": "Sallie Holt",
            "sharePercentage": 15
         },
         {
            "name": "Hunter Christensen",
            "sharePercentage": 29
         }
      ]
   },
   {
      "_id": "63d82ff351f684078e46716e",
      "applicationId": "UMB/CF/09/2020",
      "accountNumber": 32454258580,
      "accountName": "Cincyr Melbacor",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2014-04-19T08:45:54"),
      "dateBusinessEstablished": getDateString("2014-07-25T01:21:07"),
      "applicationDate": getDateString("2022-09-19T02:07:50"),
      "businessSector": "media",
      "businessType": BusinessType.LimitedLiability,
      "mainBusinessLocation": "644 Dekalb Avenue, Leeper, Colorado",
      "contactPersonTelNumber": "+233 (921) 551-3325",
      "facilityType": Facility.DeferredPaymentPlan,
      "psrScore": 0.2,
      "shareholders": [
         {
            "name": "Jillian Good",
            "sharePercentage": 33
         },
         {
            "name": "Pitts Charles",
            "sharePercentage": 64
         }
      ]
   },
   {
      "_id": "63d82ff30d4397043b07ff91",
      "applicationId": "UMB/CF/03/2022",
      "accountNumber": 86426544203,
      "accountName": "Bedlam Isosphere",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2017-04-06T08:22:13"),
      "dateBusinessEstablished": getDateString("2019-06-02T11:47:12"),
      "applicationDate": getDateString("2023-01-20T07:18:34"),
      "businessSector": "education",
      "businessType": BusinessType.Partnership,
      "mainBusinessLocation": "768 Cook Street, Escondida, Puerto Rico",
      "contactPersonTelNumber": "+233 (982) 455-2977",
      "facilityType": Facility.DeferredPaymentPlan,
      "psrScore": 0.4,
      "shareholders": [
         {
            "name": "Reese Swanson",
            "sharePercentage": 5
         },
         {
            "name": "Jayne Sloan",
            "sharePercentage": 4
         }
      ]
   },
   {
      "_id": "63d82ff3c71f5480c986e005",
      "applicationId": "UMB/CF/01/2021",
      "accountNumber": 50429926023,
      "accountName": "Menbrain Interfind",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2020-02-12T11:54:48"),
      "dateBusinessEstablished": getDateString("2013-11-05T01:50:26"),
      "applicationDate": getDateString("2022-07-20T01:11:10"),
      "businessSector": "transportation",
      "businessType": BusinessType.Cooperative,
      "mainBusinessLocation": "526 Girard Street, Smeltertown, Palau",
      "contactPersonTelNumber": "+233 (866) 510-3567",
      "facilityType": Facility.OverdraftService,
      "psrScore": 0.3,
      "shareholders": [
         {
            "name": "Dawn Cabrera",
            "sharePercentage": 10
         },
         {
            "name": "Frye Chase",
            "sharePercentage": 88
         }
      ]
   },
   {
      "_id": "63d82ff3ca27691db5e11d81",
      "applicationId": "UMB/CF/011/2019",
      "accountNumber": 19332541707,
      "accountName": "Telequiet Geeky",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2019-05-17T03:18:29"),
      "dateBusinessEstablished": getDateString("2008-08-12T09:40:07"),
      "applicationDate": getDateString("2022-07-22T11:45:15"),
      "businessSector": "hospitality",
      "businessType": BusinessType.Corporation,
      "mainBusinessLocation": "354 Boynton Place, Cobbtown, Northern Mariana Islands",
      "contactPersonTelNumber": "+233 (937) 542-3499",
      "facilityType": Facility.OverdraftService,
      "psrScore": 0.5,
      "shareholders": [
         {
            "name": "Lana Byrd",
            "sharePercentage": 3
         },
         {
            "name": "Sandra Padilla",
            "sharePercentage": 12
         }
      ]
   },
   {
      "_id": "63d82ff377e1cb520221f00f",
      "applicationId": "UMB/CF/02/2021",
      "accountNumber": 71042778495,
      "accountName": "Anixang Everest",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2015-11-23T02:02:18"),
      "dateBusinessEstablished": getDateString("2013-11-23T10:36:54"),
      "applicationDate": getDateString("2022-04-15T12:26:09"),
      "businessSector": "oil and gas",
      "businessType": BusinessType.Cooperative,
      "mainBusinessLocation": "135 Estate Road, Boykin, South Carolina",
      "contactPersonTelNumber": "+233 (808) 474-3424",
      "facilityType": Facility.LetterOfCredit,
      "psrScore": 0.1,
      "shareholders": [
         {
            "name": "Liza Barber",
            "sharePercentage": 29
         },
         {
            "name": "Short Shepherd",
            "sharePercentage": 17
         }
      ]
   },
   {
      "_id": "63d82ff350680de36d85806a",
      "applicationId": "UMB/CF/09/2023",
      "accountNumber": 82726046021,
      "accountName": "Edecine Magnafone",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2023-01-12T10:50:45"),
      "dateBusinessEstablished": getDateString("2013-07-29T01:56:55"),
      "applicationDate": getDateString("2023-01-19T04:46:52"),
      "businessSector": "textiles",
      "businessType": BusinessType.Cooperative,
      "mainBusinessLocation": "635 Plymouth Street, Frizzleburg, Guam",
      "contactPersonTelNumber": "+233 (961) 506-3144",
      "facilityType": Facility.DeferredPaymentPlan,
      "psrScore": 0.4,
      "shareholders": [
         {
            "name": "Gale Buck",
            "sharePercentage": 4
         },
         {
            "name": "Margie Carlson",
            "sharePercentage": 78
         }
      ]
   },
   {
      "_id": "63d82ff38c90d1ebe305f169",
      "applicationId": "UMB/CF/09/2023",
      "accountNumber": 78056733527,
      "accountName": "Nexgene Tourmania",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2020-02-05T07:43:50"),
      "dateBusinessEstablished": getDateString("2012-07-23T06:25:29"),
      "applicationDate": getDateString("2022-04-17T10:12:31"),
      "businessSector": "textiles",
      "businessType": BusinessType.LimitedLiability,
      "mainBusinessLocation": "124 Himrod Street, Dyckesville, Virginia",
      "contactPersonTelNumber": "+233 (978) 492-2892",
      "facilityType": Facility.OverdraftService,
      "psrScore": 0.2,
      "shareholders": [
         {
            "name": "Chandra Webster",
            "sharePercentage": 35
         },
         {
            "name": "Tasha Melton",
            "sharePercentage": 36
         }
      ]
   },
   {
      "_id": "63d82ff39500336dc8a6f199",
      "applicationId": "UMB/CF/07/2022",
      "accountNumber": 87501542397,
      "accountName": "Enersol Mangelica",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2021-01-22T07:56:59"),
      "dateBusinessEstablished": getDateString("2018-03-05T09:10:07"),
      "applicationDate": getDateString("2022-04-17T01:55:23"),
      "businessSector": "media",
      "businessType": BusinessType.LimitedLiability,
      "mainBusinessLocation": "991 Wallabout Street, Efland, California",
      "contactPersonTelNumber": "+233 (944) 543-3021",
      "facilityType": Facility.RevolvingCredit,
      "psrScore": 0.3,
      "shareholders": [
         {
            "name": "Merle Cooper",
            "sharePercentage": 89
         },
         {
            "name": "Fowler Gamble",
            "sharePercentage": 74
         }
      ]
   },
   {
      "_id": "63d82ff33e2ecad128a7b521",
      "applicationId": "UMB/CF/08/2022",
      "accountNumber": 20202417987,
      "accountName": "Flyboyz Comvey",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2016-04-07T07:34:51"),
      "dateBusinessEstablished": getDateString("2020-08-19T07:17:47"),
      "applicationDate": getDateString("2022-09-07T08:37:17"),
      "businessSector": "oil and gas",
      "businessType": BusinessType.Cooperative,
      "mainBusinessLocation": "921 Vista Place, Walton, Hawaii",
      "contactPersonTelNumber": "+233 (813) 429-3733",
      "facilityType": Facility.LineOfCredit,
      "psrScore": 0.2,
      "shareholders": [
         {
            "name": "Sophie Avery",
            "sharePercentage": 35
         },
         {
            "name": "Blanca Hopkins",
            "sharePercentage": 25
         }
      ]
   },
   {
      "_id": "63d82ff31d9d7913c687f06c",
      "applicationId": "UMB/CF/04/2019",
      "accountNumber": 27563821640,
      "accountName": "Insectus Animalia",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2018-02-03T01:28:37"),
      "dateBusinessEstablished": getDateString("2022-12-07T11:03:03"),
      "applicationDate": getDateString("2022-08-08T04:51:55"),
      "businessSector": "mining",
      "businessType": BusinessType.Cooperative,
      "mainBusinessLocation": "165 Ebony Court, Brownsville, Wisconsin",
      "contactPersonTelNumber": "+233 (957) 591-2947",
      "facilityType": Facility.LetterOfCredit,
      "psrScore": 0.3,
      "shareholders": [
         {
            "name": "Elise Cook",
            "sharePercentage": 26
         },
         {
            "name": "Angie Rojas",
            "sharePercentage": 42
         }
      ]
   },
   {
      "_id": "63d82ff3c5f167a734a9a44d",
      "applicationId": "UMB/CF/05/2022",
      "accountNumber": 10299316664,
      "accountName": "Vortexaco Bugsall",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2014-06-25T07:06:05"),
      "dateBusinessEstablished": getDateString("2006-09-10T04:01:34"),
      "applicationDate": getDateString("2022-05-18T10:51:11"),
      "businessSector": "finance",
      "businessType": BusinessType.LimitedLiability,
      "mainBusinessLocation": "928 Jefferson Street, Draper, West Virginia",
      "contactPersonTelNumber": "+233 (890) 407-2740",
      "facilityType": Facility.RevolvingCredit,
      "psrScore": 0,
      "shareholders": [
         {
            "name": "Chasity Weber",
            "sharePercentage": 96
         },
         {
            "name": "Chapman Espinoza",
            "sharePercentage": 4
         }
      ]
   },
   {
      "_id": "63d82ff3ed8e9e205396700e",
      "applicationId": "UMB/CF/010/2019",
      "accountNumber": 21765240237,
      "accountName": "Quility Polaria",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2021-05-23T06:46:19"),
      "dateBusinessEstablished": getDateString("2007-08-25T07:50:34"),
      "applicationDate": getDateString("2022-09-18T06:41:45"),
      "businessSector": "commerce",
      "businessType": BusinessType.Cooperative,
      "mainBusinessLocation": "222 Bulwer Place, Edenburg, Federated States Of Micronesia",
      "contactPersonTelNumber": "+233 (913) 558-3820",
      "facilityType": Facility.LetterOfCredit,
      "psrScore": 0.4,
      "shareholders": [
         {
            "name": "Rene Hodge",
            "sharePercentage": 92
         },
         {
            "name": "Bianca Stone",
            "sharePercentage": 96
         }
      ]
   },
   {
      "_id": "63d82ff337d28736787e028d",
      "applicationId": "UMB/CF/09/2019",
      "accountNumber": 71259510376,
      "accountName": "Zanilla Anarco",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2021-02-08T02:16:31"),
      "dateBusinessEstablished": getDateString("2018-09-12T01:57:16"),
      "applicationDate": getDateString("2022-02-06T05:30:49"),
      "businessSector": "health",
      "businessType": BusinessType.Corporation,
      "mainBusinessLocation": "556 Dakota Place, Bonanza, New Jersey",
      "contactPersonTelNumber": "+233 (974) 435-2810",
      "facilityType": Facility.LetterOfCredit,
      "psrScore": 0.2,
      "shareholders": [
         {
            "name": "Chrystal Pace",
            "sharePercentage": 37
         },
         {
            "name": "Prince Koch",
            "sharePercentage": 19
         }
      ]
   },
   {
      "_id": "63d82ff37a4f8445d3a5204f",
      "applicationId": "UMB/CF/05/2020",
      "accountNumber": 44972670632,
      "accountName": "Centuria Lotron",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2016-07-15T09:29:45"),
      "dateBusinessEstablished": getDateString("2018-09-30T06:40:53"),
      "applicationDate": getDateString("2022-03-07T01:52:41"),
      "businessSector": "transportation",
      "businessType": BusinessType.LimitedLiability,
      "mainBusinessLocation": "314 Stryker Street, Terlingua, New Mexico",
      "contactPersonTelNumber": "+233 (805) 438-3406",
      "facilityType": Facility.LineOfCredit,
      "psrScore": 0,
      "shareholders": [
         {
            "name": "Carmela Mcdonald",
            "sharePercentage": 82
         },
         {
            "name": "Kate Cain",
            "sharePercentage": 61
         }
      ]
   },
   {
      "_id": "63d82ff36c6407ee15bf8f54",
      "applicationId": "UMB/CF/03/2022",
      "accountNumber": 20599409793,
      "accountName": "Jumpstack Electonic",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2018-06-03T12:54:48"),
      "dateBusinessEstablished": getDateString("2005-07-08T07:43:09"),
      "applicationDate": getDateString("2023-01-03T03:47:08"),
      "businessSector": "hospitality",
      "businessType": BusinessType.SoleProprietorship,
      "mainBusinessLocation": "385 Tabor Court, Ventress, Idaho",
      "contactPersonTelNumber": "+233 (920) 459-2970",
      "facilityType": Facility.DeferredPaymentPlan,
      "psrScore": 0,
      "shareholders": [
         {
            "name": "Nona Mooney",
            "sharePercentage": 92
         },
         {
            "name": "Christy Campos",
            "sharePercentage": 75
         }
      ]
   },
   {
      "_id": "63d82ff3167f4865705fcf6d",
      "applicationId": "UMB/CF/05/2021",
      "accountNumber": 78329936648,
      "accountName": "Quotezart Anivet",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2018-03-17T12:04:23"),
      "dateBusinessEstablished": getDateString("2019-04-12T05:45:46"),
      "applicationDate": getDateString("2022-03-29T10:42:04"),
      "businessSector": "textiles",
      "businessType": BusinessType.Partnership,
      "mainBusinessLocation": "226 Mill Road, Concho, Maine",
      "contactPersonTelNumber": "+233 (818) 417-2479",
      "facilityType": Facility.SwinglineLoan,
      "psrScore": 0.7,
      "shareholders": [
         {
            "name": "Moreno Thomas",
            "sharePercentage": 52
         },
         {
            "name": "Bernadine Miranda",
            "sharePercentage": 10
         }
      ]
   },
   {
      "_id": "63d82ff3e96b0c4fcacbdcc6",
      "applicationId": "UMB/CF/05/2020",
      "accountNumber": 19172679337,
      "accountName": "Cujo Namegen",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2015-04-02T01:19:17"),
      "dateBusinessEstablished": getDateString("2011-08-23T09:07:03"),
      "applicationDate": getDateString("2023-01-22T04:30:15"),
      "businessSector": "textiles",
      "businessType": BusinessType.Partnership,
      "mainBusinessLocation": "989 Alabama Avenue, Lavalette, Nevada",
      "contactPersonTelNumber": "+233 (905) 561-3328",
      "facilityType": Facility.SwinglineLoan,
      "psrScore": 0.1,
      "shareholders": [
         {
            "name": "Concetta Rivers",
            "sharePercentage": 69
         },
         {
            "name": "Nielsen Pennington",
            "sharePercentage": 1
         }
      ]
   },
   {
      "_id": "63d82ff37e3709f66d4227d4",
      "applicationId": "UMB/CF/010/2021",
      "accountNumber": 71920037543,
      "accountName": "Roughies Zialactic",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2016-10-26T08:00:05"),
      "dateBusinessEstablished": getDateString("2017-10-11T03:17:17"),
      "applicationDate": getDateString("2022-10-28T03:31:42"),
      "businessSector": "agriculture",
      "businessType": BusinessType.Partnership,
      "mainBusinessLocation": "418 Crown Street, Steinhatchee, Tennessee",
      "contactPersonTelNumber": "+233 (948) 422-3155",
      "facilityType": Facility.DeferredPaymentPlan,
      "psrScore": 0.2,
      "shareholders": [
         {
            "name": "Craig Rodriquez",
            "sharePercentage": 54
         },
         {
            "name": "Katy Garza",
            "sharePercentage": 60
         }
      ]
   },
   {
      "_id": "63d82ff36e69cfd0b2025c1f",
      "applicationId": "UMB/CF/01/2023",
      "accountNumber": 58702625631,
      "accountName": "Xoggle Velos",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2017-05-23T09:58:18"),
      "dateBusinessEstablished": getDateString("2017-11-03T02:47:29"),
      "applicationDate": getDateString("2023-01-18T09:51:51"),
      "businessSector": "hospitality",
      "businessType": BusinessType.Cooperative,
      "mainBusinessLocation": "569 Harrison Place, Somerset, Massachusetts",
      "contactPersonTelNumber": "+233 (958) 599-2400",
      "facilityType": Facility.LetterOfCredit,
      "psrScore": 0.7,
      "shareholders": [
         {
            "name": "Skinner Soto",
            "sharePercentage": 68
         },
         {
            "name": "Chan Young",
            "sharePercentage": 18
         }
      ]
   },
   {
      "_id": "63d82ff3861387481117d6bc",
      "applicationId": "UMB/CF/011/2023",
      "accountNumber": 72008952013,
      "accountName": "Verbus Digial",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2014-06-23T02:20:50"),
      "dateBusinessEstablished": getDateString("2011-12-30T07:19:15"),
      "applicationDate": getDateString("2022-10-22T01:51:26"),
      "businessSector": "media",
      "businessType": BusinessType.LimitedLiability,
      "mainBusinessLocation": "135 Oriental Court, Lupton, District Of Columbia",
      "contactPersonTelNumber": "+233 (890) 544-3001",
      "facilityType": Facility.LetterOfCredit,
      "psrScore": 0.2,
      "shareholders": [
         {
            "name": "Lacey Sullivan",
            "sharePercentage": 76
         },
         {
            "name": "Holcomb Spence",
            "sharePercentage": 61
         }
      ]
   },
   {
      "_id": "63d82ff3286d07cc8d02c784",
      "applicationId": "UMB/CF/06/2020",
      "accountNumber": 72949799585,
      "accountName": "Exiand Blanet",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2018-12-13T07:48:33"),
      "dateBusinessEstablished": getDateString("2015-01-01T06:29:55"),
      "applicationDate": getDateString("2022-05-14T10:52:19"),
      "businessSector": "textiles",
      "businessType": BusinessType.Cooperative,
      "mainBusinessLocation": "961 Hendrickson Street, Datil, Michigan",
      "contactPersonTelNumber": "+233 (896) 509-3716",
      "facilityType": Facility.RevolvingCredit,
      "psrScore": 0.9,
      "shareholders": [
         {
            "name": "Parker Skinner",
            "sharePercentage": 21
         },
         {
            "name": "Dodson Strong",
            "sharePercentage": 83
         }
      ]
   },
   {
      "_id": "63d82ff392a81a482401524e",
      "applicationId": "UMB/CF/09/2022",
      "accountNumber": 26145575225,
      "accountName": "Exostream Macronaut",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2022-05-05T02:05:50"),
      "dateBusinessEstablished": getDateString("2018-09-24T05:02:43"),
      "applicationDate": getDateString("2022-01-24T02:47:03"),
      "businessSector": "oil and gas",
      "businessType": BusinessType.LimitedLiability,
      "mainBusinessLocation": "209 Norwood Avenue, Independence, Pennsylvania",
      "contactPersonTelNumber": "+233 (925) 451-2198",
      "facilityType": Facility.RevolvingCredit,
      "psrScore": 0,
      "shareholders": [
         {
            "name": "Nadia Flowers",
            "sharePercentage": 91
         },
         {
            "name": "Sadie Ashley",
            "sharePercentage": 49
         }
      ]
   },
   {
      "_id": "63d82ff3035b3ef9f358f354",
      "applicationId": "UMB/CF/010/2020",
      "accountNumber": 82753976353,
      "accountName": "Rugstars Endipine",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2022-07-26T01:18:30"),
      "dateBusinessEstablished": getDateString("2022-07-06T12:48:34"),
      "applicationDate": getDateString("2022-01-30T05:00:59"),
      "businessSector": "health",
      "businessType": BusinessType.Cooperative,
      "mainBusinessLocation": "783 Bergen Place, Calverton, Delaware",
      "contactPersonTelNumber": "+233 (883) 575-2887",
      "facilityType": Facility.LetterOfCredit,
      "psrScore": 0,
      "shareholders": [
         {
            "name": "Wooten Rose",
            "sharePercentage": 71
         },
         {
            "name": "Mcdowell Levine",
            "sharePercentage": 100
         }
      ]
   },
   {
      "_id": "63d82ff366a9ce06fcdcb172",
      "applicationId": "UMB/CF/012/2020",
      "accountNumber": 71826174263,
      "accountName": "Slax Recrisys",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2019-05-14T05:39:20"),
      "dateBusinessEstablished": getDateString("2019-01-12T03:58:41"),
      "applicationDate": getDateString("2022-11-04T02:23:05"),
      "businessSector": "commerce",
      "businessType": BusinessType.SoleProprietorship,
      "mainBusinessLocation": "852 Granite Street, Northchase, Virgin Islands",
      "contactPersonTelNumber": "+233 (893) 571-2956",
      "facilityType": Facility.LineOfCredit,
      "psrScore": 0.5,
      "shareholders": [
         {
            "name": "Grace Ayala",
            "sharePercentage": 42
         },
         {
            "name": "Sharpe Smith",
            "sharePercentage": 85
         }
      ]
   },
   {
      "_id": "63d82ff33970ff108175a1f4",
      "applicationId": "UMB/CF/010/2019",
      "accountNumber": 89209747352,
      "accountName": "Datagene Thredz",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2017-09-09T10:06:36"),
      "dateBusinessEstablished": getDateString("2008-12-28T06:12:21"),
      "applicationDate": getDateString("2022-04-23T04:15:08"),
      "businessSector": "health",
      "businessType": BusinessType.LimitedLiability,
      "mainBusinessLocation": "174 Jardine Place, Cresaptown, Rhode Island",
      "contactPersonTelNumber": "+233 (872) 540-3385",
      "facilityType": Facility.TermLoan,
      "psrScore": 0.8,
      "shareholders": [
         {
            "name": "Dolly Alford",
            "sharePercentage": 32
         },
         {
            "name": "Cynthia Chambers",
            "sharePercentage": 58
         }
      ]
   },
   {
      "_id": "63d82ff343ad8a31ee2a9412",
      "applicationId": "UMB/CF/03/2020",
      "accountNumber": 23605770281,
      "accountName": "Iplax Steelfab",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2015-08-31T05:06:26"),
      "dateBusinessEstablished": getDateString("2014-01-15T03:03:42"),
      "applicationDate": getDateString("2022-03-06T01:43:13"),
      "businessSector": "education",
      "businessType": BusinessType.Partnership,
      "mainBusinessLocation": "273 Rutherford Place, Fairforest, North Dakota",
      "contactPersonTelNumber": "+233 (810) 553-3393",
      "facilityType": Facility.LetterOfCredit,
      "psrScore": 0.3,
      "shareholders": [
         {
            "name": "Sheree Richards",
            "sharePercentage": 40
         },
         {
            "name": "Preston Tanner",
            "sharePercentage": 49
         }
      ]
   },
   {
      "_id": "63d82ff3960959698bd39f15",
      "applicationId": "UMB/CF/08/2021",
      "accountNumber": 10857801677,
      "accountName": "Portaline Netur",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2019-10-31T04:20:41"),
      "dateBusinessEstablished": getDateString("2015-02-09T07:59:45"),
      "applicationDate": getDateString("2022-06-17T01:08:05"),
      "businessSector": "health",
      "businessType": BusinessType.Partnership,
      "mainBusinessLocation": "882 Aberdeen Street, Elwood, Florida",
      "contactPersonTelNumber": "+233 (933) 451-2094",
      "facilityType": Facility.SwinglineLoan,
      "psrScore": 0.4,
      "shareholders": [
         {
            "name": "Dunn Villarreal",
            "sharePercentage": 40
         },
         {
            "name": "Cunningham Whitley",
            "sharePercentage": 81
         }
      ]
   },
   {
      "_id": "63d82ff3fe79322b5a7596e6",
      "applicationId": "UMB/CF/011/2021",
      "accountNumber": 78952671797,
      "accountName": "Polarium Entroflex",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2015-03-09T08:33:18"),
      "dateBusinessEstablished": getDateString("2019-12-13T12:51:15"),
      "applicationDate": getDateString("2022-01-01T05:42:39"),
      "businessSector": "textiles",
      "businessType": BusinessType.Partnership,
      "mainBusinessLocation": "497 Fane Court, Snyderville, Utah",
      "contactPersonTelNumber": "+233 (857) 513-3599",
      "facilityType": Facility.TermLoan,
      "psrScore": 0.3,
      "shareholders": [
         {
            "name": "Camacho Albert",
            "sharePercentage": 65
         },
         {
            "name": "May Gates",
            "sharePercentage": 3
         }
      ]
   },
   {
      "_id": "63d82ff31ee7ff8f01c3919d",
      "applicationId": "UMB/CF/06/2020",
      "accountNumber": 61015488487,
      "accountName": "Softmicro Exovent",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2015-10-15T10:14:43"),
      "dateBusinessEstablished": getDateString("2009-06-10T07:40:24"),
      "applicationDate": getDateString("2022-02-09T02:20:09"),
      "businessSector": "textiles",
      "businessType": BusinessType.SoleProprietorship,
      "mainBusinessLocation": "352 Oliver Street, Frystown, Vermont",
      "contactPersonTelNumber": "+233 (980) 538-2914",
      "facilityType": Facility.RevolvingCredit,
      "psrScore": 0.7,
      "shareholders": [
         {
            "name": "Dale David",
            "sharePercentage": 80
         },
         {
            "name": "Amanda Gonzales",
            "sharePercentage": 47
         }
      ]
   },
   {
      "_id": "63d82ff3fd57f5c81673bb8b",
      "applicationId": "UMB/CF/08/2022",
      "accountNumber": 50790200653,
      "accountName": "Kongle Orbin",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2021-01-22T02:14:43"),
      "dateBusinessEstablished": getDateString("2016-02-24T11:06:34"),
      "applicationDate": getDateString("2022-03-22T07:12:31"),
      "businessSector": "media",
      "businessType": BusinessType.Cooperative,
      "mainBusinessLocation": "510 Auburn Place, Romeville, Missouri",
      "contactPersonTelNumber": "+233 (945) 472-2314",
      "facilityType": Facility.OverdraftService,
      "psrScore": 0.4,
      "shareholders": [
         {
            "name": "Barry Perkins",
            "sharePercentage": 47
         },
         {
            "name": "Rivera Haley",
            "sharePercentage": 54
         }
      ]
   },
   {
      "_id": "63d82ff3ddb5a5eda19d7639",
      "applicationId": "UMB/CF/08/2019",
      "accountNumber": 48173493053,
      "accountName": "Aquacine Trollery",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2022-08-09T12:32:55"),
      "dateBusinessEstablished": getDateString("2017-06-11T05:34:29"),
      "applicationDate": getDateString("2022-04-19T10:50:32"),
      "businessSector": "mining",
      "businessType": BusinessType.SoleProprietorship,
      "mainBusinessLocation": "249 Cranberry Street, Maplewood, Washington",
      "contactPersonTelNumber": "+233 (910) 564-3517",
      "facilityType": Facility.DeferredPaymentPlan,
      "psrScore": 0.3,
      "shareholders": [
         {
            "name": "Amie Weeks",
            "sharePercentage": 91
         },
         {
            "name": "Della Gardner",
            "sharePercentage": 87
         }
      ]
   },
   {
      "_id": "63d82ff3569f92d69aa80eb6",
      "applicationId": "UMB/CF/04/2023",
      "accountNumber": 87715772385,
      "accountName": "Ecstasia Eweville",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2017-03-05T05:23:03"),
      "dateBusinessEstablished": getDateString("2011-02-04T06:52:09"),
      "applicationDate": getDateString("2022-07-15T11:13:36"),
      "businessSector": "food",
      "businessType": BusinessType.Corporation,
      "mainBusinessLocation": "470 Roosevelt Court, Croom, Minnesota",
      "contactPersonTelNumber": "+233 (887) 443-2769",
      "facilityType": Facility.RevolvingCredit,
      "psrScore": 0.5,
      "shareholders": [
         {
            "name": "Dillard Burns",
            "sharePercentage": 17
         },
         {
            "name": "Nanette Woodard",
            "sharePercentage": 14
         }
      ]
   },
   {
      "_id": "63d82ff39a5a9401efa10dc7",
      "applicationId": "UMB/CF/07/2019",
      "accountNumber": 27058209270,
      "accountName": "Accuprint Oceanica",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2021-07-14T06:57:09"),
      "dateBusinessEstablished": getDateString("2008-05-08T07:58:18"),
      "applicationDate": getDateString("2022-07-11T08:20:48"),
      "businessSector": "commerce",
      "businessType": BusinessType.Partnership,
      "mainBusinessLocation": "135 Russell Street, Greenock, Oklahoma",
      "contactPersonTelNumber": "+233 (930) 527-2786",
      "facilityType": Facility.RevolvingCredit,
      "psrScore": 0.8,
      "shareholders": [
         {
            "name": "Cooke Bird",
            "sharePercentage": 2
         },
         {
            "name": "Orr Church",
            "sharePercentage": 84
         }
      ]
   },
   {
      "_id": "63d82ff383dcf774f34eee81",
      "applicationId": "UMB/CF/012/2022",
      "accountNumber": 70779042823,
      "accountName": "Viagreat Norali",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2016-10-27T06:15:28"),
      "dateBusinessEstablished": getDateString("2004-08-28T12:07:37"),
      "applicationDate": getDateString("2022-11-28T02:27:36"),
      "businessSector": "transportation",
      "businessType": BusinessType.SoleProprietorship,
      "mainBusinessLocation": "789 Quentin Road, Manitou, Arizona",
      "contactPersonTelNumber": "+233 (957) 457-3078",
      "facilityType": Facility.OverdraftService,
      "psrScore": 0,
      "shareholders": [
         {
            "name": "Alta Suarez",
            "sharePercentage": 41
         },
         {
            "name": "Jimmie Velasquez",
            "sharePercentage": 40
         }
      ]
   },
   {
      "_id": "63d82ff3ca4313679dc01b47",
      "applicationId": "UMB/CF/01/2021",
      "accountNumber": 76986050269,
      "accountName": "Isologics Xymonk",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2022-04-24T11:34:53"),
      "dateBusinessEstablished": getDateString("2018-10-25T08:20:53"),
      "applicationDate": getDateString("2022-11-14T06:51:29"),
      "businessSector": "agriculture",
      "businessType": BusinessType.LimitedLiability,
      "mainBusinessLocation": "277 Schenck Court, Roland, New York",
      "contactPersonTelNumber": "+233 (868) 403-3869",
      "facilityType": Facility.LineOfCredit,
      "psrScore": 0,
      "shareholders": [
         {
            "name": "Cecile Potts",
            "sharePercentage": 32
         },
         {
            "name": "Cathryn Nielsen",
            "sharePercentage": 18
         }
      ]
   },
   {
      "_id": "63d82ff3948b147739c0698b",
      "applicationId": "UMB/CF/06/2022",
      "accountNumber": 47041671654,
      "accountName": "Aquazure Tersanki",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2018-09-14T08:17:05"),
      "dateBusinessEstablished": getDateString("2020-01-17T07:04:39"),
      "applicationDate": getDateString("2022-06-01T04:24:42"),
      "businessSector": "media",
      "businessType": BusinessType.Corporation,
      "mainBusinessLocation": "668 Willmohr Street, Clayville, Oregon",
      "contactPersonTelNumber": "+233 (997) 482-2068",
      "facilityType": Facility.OverdraftService,
      "psrScore": 0,
      "shareholders": [
         {
            "name": "Beverly Buckley",
            "sharePercentage": 48
         },
         {
            "name": "Knox Hahn",
            "sharePercentage": 80
         }
      ]
   },
   {
      "_id": "63d82ff3c57ad3e5486a944a",
      "applicationId": "UMB/CF/06/2019",
      "accountNumber": 63697267367,
      "accountName": "Isotronic Quilm",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2018-04-03T03:29:36"),
      "dateBusinessEstablished": getDateString("2008-08-13T12:42:06"),
      "applicationDate": getDateString("2023-01-24T08:37:59"),
      "businessSector": "oil and gas",
      "businessType": BusinessType.LimitedLiability,
      "mainBusinessLocation": "373 Douglass Street, Mansfield, Alaska",
      "contactPersonTelNumber": "+233 (893) 542-3674",
      "facilityType": Facility.LineOfCredit,
      "psrScore": 0.2,
      "shareholders": [
         {
            "name": "Price Joyce",
            "sharePercentage": 84
         },
         {
            "name": "Mueller Page",
            "sharePercentage": 18
         }
      ]
   },
   {
      "_id": "63d82ff367a556de7683cd30",
      "applicationId": "UMB/CF/06/2023",
      "accountNumber": 67981540281,
      "accountName": "Squish Terragen",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2022-11-05T05:47:36"),
      "dateBusinessEstablished": getDateString("2021-12-31T03:30:00"),
      "applicationDate": getDateString("2022-08-05T10:55:57"),
      "businessSector": "food",
      "businessType": BusinessType.Partnership,
      "mainBusinessLocation": "120 Newkirk Avenue, Glendale, New Hampshire",
      "contactPersonTelNumber": "+233 (935) 443-2924",
      "facilityType": Facility.LineOfCredit,
      "psrScore": 0.6,
      "shareholders": [
         {
            "name": "Rosales Kim",
            "sharePercentage": 27
         },
         {
            "name": "Pickett Hutchinson",
            "sharePercentage": 95
         }
      ]
   },
   {
      "_id": "63d82ff3ea6441ed80dc6bd8",
      "applicationId": "UMB/CF/08/2022",
      "accountNumber": 23022197021,
      "accountName": "Brainquil Austech",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2016-01-19T09:01:05"),
      "dateBusinessEstablished": getDateString("2006-08-30T04:28:23"),
      "applicationDate": getDateString("2022-07-13T08:12:14"),
      "businessSector": "education",
      "businessType": BusinessType.Cooperative,
      "mainBusinessLocation": "897 Tompkins Place, Hardyville, Connecticut",
      "contactPersonTelNumber": "+233 (921) 586-3562",
      "facilityType": Facility.LetterOfCredit,
      "psrScore": 0.5,
      "shareholders": [
         {
            "name": "Silva Hinton",
            "sharePercentage": 10
         },
         {
            "name": "Marian Sellers",
            "sharePercentage": 81
         }
      ]
   },
   {
      "_id": "63d82ff36755362e2bae6370",
      "applicationId": "UMB/CF/011/2018",
      "accountNumber": 18747890752,
      "accountName": "Translink Viagrand",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2019-12-01T01:31:45"),
      "dateBusinessEstablished": getDateString("2006-01-02T09:23:23"),
      "applicationDate": getDateString("2022-08-22T06:49:17"),
      "businessSector": "commerce",
      "businessType": BusinessType.Cooperative,
      "mainBusinessLocation": "766 Anna Court, Riceville, North Carolina",
      "contactPersonTelNumber": "+233 (857) 557-2256",
      "facilityType": Facility.DeferredPaymentPlan,
      "psrScore": 0.6,
      "shareholders": [
         {
            "name": "Bessie Watson",
            "sharePercentage": 52
         },
         {
            "name": "Katie Huffman",
            "sharePercentage": 95
         }
      ]
   },
   {
      "_id": "63d82ff3ef6e0f57ee86adfd",
      "applicationId": "UMB/CF/05/2018",
      "accountNumber": 74022342528,
      "accountName": "Ersum Junipoor",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2016-03-03T02:53:52"),
      "dateBusinessEstablished": getDateString("2004-05-03T10:02:17"),
      "applicationDate": getDateString("2022-03-23T07:41:16"),
      "businessSector": "transportation",
      "businessType": BusinessType.Cooperative,
      "mainBusinessLocation": "942 Lawton Street, Chical, Mississippi",
      "contactPersonTelNumber": "+233 (904) 521-3606",
      "facilityType": Facility.TermLoan,
      "psrScore": 0.2,
      "shareholders": [
         {
            "name": "Estrada Mcneil",
            "sharePercentage": 49
         },
         {
            "name": "Combs Stafford",
            "sharePercentage": 52
         }
      ]
   },
   {
      "_id": "63d82ff38c18ed7903b27e87",
      "applicationId": "UMB/CF/012/2018",
      "accountNumber": 25754411405,
      "accountName": "Petigems Deviltoe",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2019-05-20T02:48:14"),
      "dateBusinessEstablished": getDateString("2014-02-16T07:20:18"),
      "applicationDate": getDateString("2022-03-06T12:36:38"),
      "businessSector": "media",
      "businessType": BusinessType.Cooperative,
      "mainBusinessLocation": "121 Montana Place, Abrams, Kentucky",
      "contactPersonTelNumber": "+233 (967) 560-3159",
      "facilityType": Facility.LetterOfCredit,
      "psrScore": 0,
      "shareholders": [
         {
            "name": "Coleen Dawson",
            "sharePercentage": 74
         },
         {
            "name": "Cara Mayo",
            "sharePercentage": 29
         }
      ]
   },
   {
      "_id": "63d82ff371f3d2a0ab580acb",
      "applicationId": "UMB/CF/02/2023",
      "accountNumber": 70325461402,
      "accountName": "Neteria Talae",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2021-09-21T08:20:19"),
      "dateBusinessEstablished": getDateString("2010-09-29T08:47:41"),
      "applicationDate": getDateString("2022-11-10T01:44:37"),
      "businessSector": "media",
      "businessType": BusinessType.LimitedLiability,
      "mainBusinessLocation": "390 Garfield Place, Bellfountain, American Samoa",
      "contactPersonTelNumber": "+233 (878) 486-2216",
      "facilityType": Facility.LetterOfCredit,
      "psrScore": 0.4,
      "shareholders": [
         {
            "name": "Flynn Wilkinson",
            "sharePercentage": 90
         },
         {
            "name": "Lula Marks",
            "sharePercentage": 33
         }
      ]
   },
   {
      "_id": "63d82ff38b6139d5c24fee86",
      "applicationId": "UMB/CF/09/2020",
      "accountNumber": 46837774857,
      "accountName": "Maxemia Cosmetex",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2021-08-05T08:46:08"),
      "dateBusinessEstablished": getDateString("2005-06-06T01:47:46"),
      "applicationDate": getDateString("2022-02-01T11:38:21"),
      "businessSector": "textiles",
      "businessType": BusinessType.LimitedLiability,
      "mainBusinessLocation": "213 Monitor Street, Barronett, Maryland",
      "contactPersonTelNumber": "+233 (994) 406-3006",
      "facilityType": Facility.LetterOfCredit,
      "psrScore": 0.1,
      "shareholders": [
         {
            "name": "Long Avila",
            "sharePercentage": 96
         },
         {
            "name": "Hill Walters",
            "sharePercentage": 66
         }
      ]
   },
   {
      "_id": "63d82ff3ae4897ddc5ed67bf",
      "applicationId": "UMB/CF/06/2018",
      "accountNumber": 78698173861,
      "accountName": "Klugger Comtours",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2015-09-16T07:35:11"),
      "dateBusinessEstablished": getDateString("2006-12-19T01:01:31"),
      "applicationDate": getDateString("2022-09-11T05:36:12"),
      "businessSector": "oil and gas",
      "businessType": BusinessType.Corporation,
      "mainBusinessLocation": "934 Emerald Street, Caroline, Illinois",
      "contactPersonTelNumber": "+233 (873) 407-3687",
      "facilityType": Facility.OverdraftService,
      "psrScore": 0.9,
      "shareholders": [
         {
            "name": "Jennie Guerrero",
            "sharePercentage": 26
         },
         {
            "name": "Marta Crawford",
            "sharePercentage": 28
         }
      ]
   },
   {
      "_id": "63d82ff35b0dd45bf03e58bf",
      "applicationId": "UMB/CF/05/2022",
      "accountNumber": 55613250919,
      "accountName": "Sentia Rooforia",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2022-07-17T04:13:32"),
      "dateBusinessEstablished": getDateString("2013-09-18T09:06:46"),
      "applicationDate": getDateString("2022-04-08T12:23:23"),
      "businessSector": "mining",
      "businessType": BusinessType.Corporation,
      "mainBusinessLocation": "197 Claver Place, Fowlerville, Wyoming",
      "contactPersonTelNumber": "+233 (803) 554-3900",
      "facilityType": Facility.DeferredPaymentPlan,
      "psrScore": 0.7,
      "shareholders": [
         {
            "name": "Esmeralda Wells",
            "sharePercentage": 61
         },
         {
            "name": "Fischer Larson",
            "sharePercentage": 64
         }
      ]
   },
   {
      "_id": "63d82ff3776364ce2fcc1ce4",
      "applicationId": "UMB/CF/010/2023",
      "accountNumber": 43295110503,
      "accountName": "Geekosis Intrawear",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2022-06-23T10:44:38"),
      "dateBusinessEstablished": getDateString("2014-02-02T07:24:01"),
      "applicationDate": getDateString("2022-03-19T12:30:45"),
      "businessSector": "transportation",
      "businessType": BusinessType.LimitedLiability,
      "mainBusinessLocation": "655 Borinquen Pl, Choctaw, Marshall Islands",
      "contactPersonTelNumber": "+233 (841) 563-3471",
      "facilityType": Facility.TermLoan,
      "psrScore": 0.4,
      "shareholders": [
         {
            "name": "Colon Faulkner",
            "sharePercentage": 94
         },
         {
            "name": "Mindy Nolan",
            "sharePercentage": 94
         }
      ]
   },
   {
      "_id": "63d82ff3bf2e8918cbe75a9a",
      "applicationId": "UMB/CF/08/2021",
      "accountNumber": 70148200007,
      "accountName": "Geeknet Xixan",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2021-11-05T11:59:48"),
      "dateBusinessEstablished": getDateString("2015-06-26T02:21:47"),
      "applicationDate": getDateString("2022-03-18T08:31:20"),
      "businessSector": "mining",
      "businessType": BusinessType.Cooperative,
      "mainBusinessLocation": "437 Krier Place, Lookingglass, Kansas",
      "contactPersonTelNumber": "+233 (924) 419-2373",
      "facilityType": Facility.OverdraftService,
      "psrScore": 0.3,
      "shareholders": [
         {
            "name": "Rodriguez Hernandez",
            "sharePercentage": 70
         },
         {
            "name": "Barber Hicks",
            "sharePercentage": 99
         }
      ]
   },
   {
      "_id": "63d82ff3302f01616b1fb89c",
      "applicationId": "UMB/CF/011/2023",
      "accountNumber": 49065069617,
      "accountName": "Speedbolt Rodemco",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2015-09-25T11:10:19"),
      "dateBusinessEstablished": getDateString("2020-04-06T09:21:39"),
      "applicationDate": getDateString("2022-06-04T03:46:25"),
      "businessSector": "oil and gas",
      "businessType": BusinessType.Corporation,
      "mainBusinessLocation": "753 Malta Street, Bloomington, Montana",
      "contactPersonTelNumber": "+233 (909) 491-3992",
      "facilityType": Facility.LetterOfCredit,
      "psrScore": 0.5,
      "shareholders": [
         {
            "name": "Irma Stokes",
            "sharePercentage": 32
         },
         {
            "name": "Simmons Bullock",
            "sharePercentage": 84
         }
      ]
   },
   {
      "_id": "63d82ff3218d135a8f5440d9",
      "applicationId": "UMB/CF/06/2022",
      "accountNumber": 46221902708,
      "accountName": "Unq Neurocell",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2021-06-17T12:54:52"),
      "dateBusinessEstablished": getDateString("2021-08-13T12:10:26"),
      "applicationDate": getDateString("2023-01-11T07:46:12"),
      "businessSector": "health",
      "businessType": BusinessType.LimitedLiability,
      "mainBusinessLocation": "837 Oakland Place, Fairfield, Nebraska",
      "contactPersonTelNumber": "+233 (979) 568-2481",
      "facilityType": Facility.SwinglineLoan,
      "psrScore": 0.2,
      "shareholders": [
         {
            "name": "Luz Dillard",
            "sharePercentage": 17
         },
         {
            "name": "Warren Hensley",
            "sharePercentage": 73
         }
      ]
   },
   {
      "_id": "63d82ff31a64308367f9bb48",
      "applicationId": "UMB/CF/04/2021",
      "accountNumber": 20627496549,
      "accountName": "Diginetic Sealoud",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2014-10-29T12:09:36"),
      "dateBusinessEstablished": getDateString("2008-04-24T03:47:21"),
      "applicationDate": getDateString("2022-08-05T01:56:56"),
      "businessSector": "transportation",
      "businessType": BusinessType.Cooperative,
      "mainBusinessLocation": "462 Strong Place, Bethpage, Indiana",
      "contactPersonTelNumber": "+233 (858) 590-3704",
      "facilityType": Facility.LetterOfCredit,
      "psrScore": 0.7,
      "shareholders": [
         {
            "name": "Kerri Mueller",
            "sharePercentage": 76
         },
         {
            "name": "Cherie Hurley",
            "sharePercentage": 91
         }
      ]
   },
   {
      "_id": "63d82ff33e006e5ef8c01ef3",
      "applicationId": "UMB/CF/010/2022",
      "accountNumber": 79971739772,
      "accountName": "Krog Perkle",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2020-02-15T07:57:08"),
      "dateBusinessEstablished": getDateString("2016-06-11T10:27:27"),
      "applicationDate": getDateString("2022-06-26T06:55:16"),
      "businessSector": "hospitality",
      "businessType": BusinessType.Partnership,
      "mainBusinessLocation": "898 Milton Street, Nicut, Arkansas",
      "contactPersonTelNumber": "+233 (843) 502-3601",
      "facilityType": Facility.LetterOfCredit,
      "psrScore": 0.1,
      "shareholders": [
         {
            "name": "Jordan Mcintyre",
            "sharePercentage": 42
         },
         {
            "name": "Pittman Carter",
            "sharePercentage": 86
         }
      ]
   },
   {
      "_id": "63d82ff3e9d240a12dc558d9",
      "applicationId": "UMB/CF/01/2023",
      "accountNumber": 54796822899,
      "accountName": "Artiq Ontality",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2019-08-15T10:04:54"),
      "dateBusinessEstablished": getDateString("2017-10-12T03:58:15"),
      "applicationDate": getDateString("2022-04-08T02:54:16"),
      "businessSector": "food",
      "businessType": BusinessType.LimitedLiability,
      "mainBusinessLocation": "254 Oceanview Avenue, Aguila, Georgia",
      "contactPersonTelNumber": "+233 (921) 597-2062",
      "facilityType": Facility.DeferredPaymentPlan,
      "psrScore": 0.1,
      "shareholders": [
         {
            "name": "Samantha Yang",
            "sharePercentage": 21
         },
         {
            "name": "Estela Rivera",
            "sharePercentage": 8
         }
      ]
   },
   {
      "_id": "63d82ff3c564f9665386baf7",
      "applicationId": "UMB/CF/011/2022",
      "accountNumber": 18583787056,
      "accountName": "Terascape Zogak",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2014-04-04T12:23:16"),
      "dateBusinessEstablished": getDateString("2015-02-12T06:44:00"),
      "applicationDate": getDateString("2022-08-20T06:16:30"),
      "businessSector": "health",
      "businessType": BusinessType.Corporation,
      "mainBusinessLocation": "826 Scholes Street, Rose, Louisiana",
      "contactPersonTelNumber": "+233 (858) 513-3837",
      "facilityType": Facility.OverdraftService,
      "psrScore": 0.6,
      "shareholders": [
         {
            "name": "Wynn Moody",
            "sharePercentage": 6
         },
         {
            "name": "Wilkins Maldonado",
            "sharePercentage": 80
         }
      ]
   },
   {
      "_id": "63d82ff3c2c4f4ca68914c41",
      "applicationId": "UMB/CF/01/2019",
      "accountNumber": 64955377064,
      "accountName": "Zanymax Freakin",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2019-02-21T09:31:26"),
      "dateBusinessEstablished": getDateString("2004-11-28T08:23:20"),
      "applicationDate": getDateString("2022-11-23T07:26:41"),
      "businessSector": "oil and gas",
      "businessType": BusinessType.SoleProprietorship,
      "mainBusinessLocation": "494 Locust Avenue, Dellview, Texas",
      "contactPersonTelNumber": "+233 (865) 585-3224",
      "facilityType": Facility.DeferredPaymentPlan,
      "psrScore": 0.1,
      "shareholders": [
         {
            "name": "Greta Mosley",
            "sharePercentage": 80
         },
         {
            "name": "Farley Lloyd",
            "sharePercentage": 34
         }
      ]
   },
   {
      "_id": "63d82ff3d3b0b8799347f1e6",
      "applicationId": "UMB/CF/09/2018",
      "accountNumber": 70764183755,
      "accountName": "Marqet Earthwax",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2014-02-19T02:53:57"),
      "dateBusinessEstablished": getDateString("2020-01-17T12:37:38"),
      "applicationDate": getDateString("2022-03-28T05:29:34"),
      "businessSector": "food",
      "businessType": BusinessType.SoleProprietorship,
      "mainBusinessLocation": "156 Joval Court, Nogal, South Dakota",
      "contactPersonTelNumber": "+233 (910) 479-2227",
      "facilityType": Facility.DeferredPaymentPlan,
      "psrScore": 0.5,
      "shareholders": [
         {
            "name": "Amparo Hebert",
            "sharePercentage": 65
         },
         {
            "name": "Sanford Francis",
            "sharePercentage": 17
         }
      ]
   },
   {
      "_id": "63d82ff3085de663c4400f45",
      "applicationId": "UMB/CF/012/2018",
      "accountNumber": 67634176507,
      "accountName": "Digitalus Valreda",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2018-03-27T11:27:46"),
      "dateBusinessEstablished": getDateString("2005-11-06T03:05:20"),
      "applicationDate": getDateString("2022-08-19T10:13:59"),
      "businessSector": "commerce",
      "businessType": BusinessType.Partnership,
      "mainBusinessLocation": "521 Jackson Street, Sunbury, Alabama",
      "contactPersonTelNumber": "+233 (972) 517-3236",
      "facilityType": Facility.LineOfCredit,
      "psrScore": 0.8,
      "shareholders": [
         {
            "name": "Glenn Wise",
            "sharePercentage": 89
         },
         {
            "name": "Oconnor Newman",
            "sharePercentage": 46
         }
      ]
   },
   {
      "_id": "63d82ff376907e8d9d4584a3",
      "applicationId": "UMB/CF/02/2022",
      "accountNumber": 49264124586,
      "accountName": "Schoolio Magneato",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2021-09-27T02:20:25"),
      "dateBusinessEstablished": getDateString("2018-07-12T08:33:16"),
      "applicationDate": getDateString("2023-01-21T06:46:14"),
      "businessSector": "construction",
      "businessType": BusinessType.Partnership,
      "mainBusinessLocation": "847 Newel Street, Swartzville, Ohio",
      "contactPersonTelNumber": "+233 (806) 554-2495",
      "facilityType": Facility.LineOfCredit,
      "psrScore": 0,
      "shareholders": [
         {
            "name": "Cantu Valdez",
            "sharePercentage": 37
         },
         {
            "name": "Rosario Lee",
            "sharePercentage": 76
         }
      ]
   },
   {
      "_id": "63d82ff38afe274a919228c0",
      "applicationId": "UMB/CF/05/2023",
      "accountNumber": 69246998944,
      "accountName": "Netbook Omnigog",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2015-11-14T05:35:31"),
      "dateBusinessEstablished": getDateString("2010-12-20T05:29:53"),
      "applicationDate": getDateString("2022-01-09T02:57:35"),
      "businessSector": "textiles",
      "businessType": BusinessType.SoleProprietorship,
      "mainBusinessLocation": "630 Division Avenue, Keller, Colorado",
      "contactPersonTelNumber": "+233 (973) 542-2798",
      "facilityType": Facility.TermLoan,
      "psrScore": 0.3,
      "shareholders": [
         {
            "name": "Leanne Rosario",
            "sharePercentage": 35
         },
         {
            "name": "Stark Todd",
            "sharePercentage": 50
         }
      ]
   },
   {
      "_id": "63d82ff37026519b40e744dc",
      "applicationId": "UMB/CF/07/2018",
      "accountNumber": 65180979731,
      "accountName": "Kongene Quinex",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2018-01-25T02:54:06"),
      "dateBusinessEstablished": getDateString("2012-07-26T09:57:12"),
      "applicationDate": getDateString("2023-01-29T01:03:09"),
      "businessSector": "mining",
      "businessType": BusinessType.Cooperative,
      "mainBusinessLocation": "497 Downing Street, Fulford, Puerto Rico",
      "contactPersonTelNumber": "+233 (828) 459-3541",
      "facilityType": Facility.DeferredPaymentPlan,
      "psrScore": 0.5,
      "shareholders": [
         {
            "name": "Alisha Lynn",
            "sharePercentage": 36
         },
         {
            "name": "Tate Cochran",
            "sharePercentage": 13
         }
      ]
   },
   {
      "_id": "63d82ff3c6a4e40744ba1f51",
      "applicationId": "UMB/CF/03/2023",
      "accountNumber": 74222850814,
      "accountName": "Earthpure Uni",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2021-04-30T12:21:13"),
      "dateBusinessEstablished": getDateString("2006-09-04T10:21:15"),
      "applicationDate": getDateString("2022-08-03T09:26:17"),
      "businessSector": "construction",
      "businessType": BusinessType.Corporation,
      "mainBusinessLocation": "642 Bainbridge Street, Bynum, Palau",
      "contactPersonTelNumber": "+233 (953) 564-3908",
      "facilityType": Facility.LineOfCredit,
      "psrScore": 0.4,
      "shareholders": [
         {
            "name": "Sonja Russo",
            "sharePercentage": 1
         },
         {
            "name": "Francisca Mccoy",
            "sharePercentage": 72
         }
      ]
   },
   {
      "_id": "63d82ff31bbe2487d91d6739",
      "applicationId": "UMB/CF/04/2022",
      "accountNumber": 74762241448,
      "accountName": "Prowaste Assurity",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2016-10-28T09:35:10"),
      "dateBusinessEstablished": getDateString("2013-11-26T09:53:51"),
      "applicationDate": getDateString("2022-10-31T01:05:33"),
      "businessSector": "transportation",
      "businessType": BusinessType.Cooperative,
      "mainBusinessLocation": "536 Crystal Street, Grandview, Northern Mariana Islands",
      "contactPersonTelNumber": "+233 (924) 429-2358",
      "facilityType": Facility.SwinglineLoan,
      "psrScore": 0.8,
      "shareholders": [
         {
            "name": "Snyder Calderon",
            "sharePercentage": 27
         },
         {
            "name": "Adele Schroeder",
            "sharePercentage": 80
         }
      ]
   },
   {
      "_id": "63d82ff3e9dc9741708782c8",
      "applicationId": "UMB/CF/03/2018",
      "accountNumber": 71344833074,
      "accountName": "Enomen Geekus",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2016-05-09T11:58:08"),
      "dateBusinessEstablished": getDateString("2016-04-17T04:45:01"),
      "applicationDate": getDateString("2023-01-17T07:13:24"),
      "businessSector": "health",
      "businessType": BusinessType.Partnership,
      "mainBusinessLocation": "647 Bills Place, Neahkahnie, South Carolina",
      "contactPersonTelNumber": "+233 (916) 556-2411",
      "facilityType": Facility.RevolvingCredit,
      "psrScore": 0.1,
      "shareholders": [
         {
            "name": "Antoinette Hendricks",
            "sharePercentage": 64
         },
         {
            "name": "Avila Glass",
            "sharePercentage": 92
         }
      ]
   },
   {
      "_id": "63d82ff3011c49ea14ee3c28",
      "applicationId": "UMB/CF/010/2021",
      "accountNumber": 75869460671,
      "accountName": "Strozen Indexia",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2020-02-23T02:53:01"),
      "dateBusinessEstablished": getDateString("2006-06-09T08:29:25"),
      "applicationDate": getDateString("2023-01-11T09:40:32"),
      "businessSector": "oil and gas",
      "businessType": BusinessType.Cooperative,
      "mainBusinessLocation": "884 Woodpoint Road, Waterview, Guam",
      "contactPersonTelNumber": "+233 (983) 551-2130",
      "facilityType": Facility.LineOfCredit,
      "psrScore": 0.2,
      "shareholders": [
         {
            "name": "Jenny Coffey",
            "sharePercentage": 57
         },
         {
            "name": "Richardson Pruitt",
            "sharePercentage": 54
         }
      ]
   },
   {
      "_id": "63d82ff371c4ee32f2fc8069",
      "applicationId": "UMB/CF/012/2020",
      "accountNumber": 42088841984,
      "accountName": "Volax Biolive",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2022-03-25T05:57:17"),
      "dateBusinessEstablished": getDateString("2016-07-11T11:39:53"),
      "applicationDate": getDateString("2022-11-13T08:16:02"),
      "businessSector": "oil and gas",
      "businessType": BusinessType.Corporation,
      "mainBusinessLocation": "513 Dunne Place, Greenbush, Virginia",
      "contactPersonTelNumber": "+233 (882) 600-3312",
      "facilityType": Facility.RevolvingCredit,
      "psrScore": 0.7,
      "shareholders": [
         {
            "name": "Workman Hall",
            "sharePercentage": 88
         },
         {
            "name": "Houston Booth",
            "sharePercentage": 32
         }
      ]
   },
   {
      "_id": "63d82ff3871a7adf9a23ce80",
      "applicationId": "UMB/CF/07/2020",
      "accountNumber": 76456215041,
      "accountName": "Pheast Jasper",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2017-05-17T05:31:21"),
      "dateBusinessEstablished": getDateString("2014-03-05T06:58:39"),
      "applicationDate": getDateString("2022-10-25T07:20:41"),
      "businessSector": "finance",
      "businessType": BusinessType.SoleProprietorship,
      "mainBusinessLocation": "334 Butler Street, Noxen, California",
      "contactPersonTelNumber": "+233 (932) 590-2891",
      "facilityType": Facility.LineOfCredit,
      "psrScore": 0,
      "shareholders": [
         {
            "name": "Baldwin Fitzgerald",
            "sharePercentage": 54
         },
         {
            "name": "Eloise Talley",
            "sharePercentage": 5
         }
      ]
   },
   {
      "_id": "63d82ff3b8dd1bcf7993b0c2",
      "applicationId": "UMB/CF/02/2021",
      "accountNumber": 87446778544,
      "accountName": "Kenegy Geofarm",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2020-05-16T12:07:16"),
      "dateBusinessEstablished": getDateString("2015-10-16T01:39:43"),
      "applicationDate": getDateString("2022-07-06T06:01:31"),
      "businessSector": "hospitality",
      "businessType": BusinessType.Cooperative,
      "mainBusinessLocation": "934 Navy Street, Gibsonia, Hawaii",
      "contactPersonTelNumber": "+233 (856) 429-2454",
      "facilityType": Facility.DeferredPaymentPlan,
      "psrScore": 0.5,
      "shareholders": [
         {
            "name": "King Finch",
            "sharePercentage": 14
         },
         {
            "name": "Morgan Burke",
            "sharePercentage": 72
         }
      ]
   },
   {
      "_id": "63d82ff3f214a5a236a49e66",
      "applicationId": "UMB/CF/09/2019",
      "accountNumber": 84122372068,
      "accountName": "Songbird Jamnation",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2015-08-23T05:01:52"),
      "dateBusinessEstablished": getDateString("2020-06-11T12:15:12"),
      "applicationDate": getDateString("2022-02-07T02:44:45"),
      "businessSector": "transportation",
      "businessType": BusinessType.LimitedLiability,
      "mainBusinessLocation": "697 Highland Boulevard, Ironton, Wisconsin",
      "contactPersonTelNumber": "+233 (809) 416-2537",
      "facilityType": Facility.SwinglineLoan,
      "psrScore": 0.4,
      "shareholders": [
         {
            "name": "Grimes Cobb",
            "sharePercentage": 50
         },
         {
            "name": "Ava Vincent",
            "sharePercentage": 32
         }
      ]
   },
   {
      "_id": "63d82ff322b01f35bb054e01",
      "applicationId": "UMB/CF/011/2022",
      "accountNumber": 26810525516,
      "accountName": "Zolarity Accruex",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2016-08-01T06:32:46"),
      "dateBusinessEstablished": getDateString("2021-01-13T04:07:47"),
      "applicationDate": getDateString("2022-07-03T03:12:30"),
      "businessSector": "media",
      "businessType": BusinessType.LimitedLiability,
      "mainBusinessLocation": "288 Meadow Street, Greenwich, West Virginia",
      "contactPersonTelNumber": "+233 (938) 513-2757",
      "facilityType": Facility.RevolvingCredit,
      "psrScore": 0.1,
      "shareholders": [
         {
            "name": "Bettie Barrett",
            "sharePercentage": 66
         },
         {
            "name": "Santos Ferrell",
            "sharePercentage": 2
         }
      ]
   },
   {
      "_id": "63d82ff35a7d4e69d8f1860a",
      "applicationId": "UMB/CF/09/2019",
      "accountNumber": 83030456357,
      "accountName": "Jimbies Quizmo",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2022-03-10T02:41:47"),
      "dateBusinessEstablished": getDateString("2015-08-04T07:14:53"),
      "applicationDate": getDateString("2023-01-02T12:17:39"),
      "businessSector": "transportation",
      "businessType": BusinessType.Corporation,
      "mainBusinessLocation": "152 Sumner Place, Statenville, Federated States Of Micronesia",
      "contactPersonTelNumber": "+233 (930) 576-2883",
      "facilityType": Facility.OverdraftService,
      "psrScore": 0.6,
      "shareholders": [
         {
            "name": "Andrea Parrish",
            "sharePercentage": 95
         },
         {
            "name": "Patrica Martin",
            "sharePercentage": 50
         }
      ]
   },
   {
      "_id": "63d82ff3e87c6726f5077924",
      "applicationId": "UMB/CF/010/2019",
      "accountNumber": 26215989186,
      "accountName": "Exospace Jetsilk",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2015-06-13T07:10:47"),
      "dateBusinessEstablished": getDateString("2007-11-27T02:38:10"),
      "applicationDate": getDateString("2022-11-24T09:36:32"),
      "businessSector": "finance",
      "businessType": BusinessType.Corporation,
      "mainBusinessLocation": "300 Huron Street, Garnet, New Jersey",
      "contactPersonTelNumber": "+233 (924) 420-3589",
      "facilityType": Facility.SwinglineLoan,
      "psrScore": 0.2,
      "shareholders": [
         {
            "name": "Katharine Palmer",
            "sharePercentage": 24
         },
         {
            "name": "Maribel Travis",
            "sharePercentage": 44
         }
      ]
   },
   {
      "_id": "63d82ff381269b69bbe12784",
      "applicationId": "UMB/CF/01/2019",
      "accountNumber": 40160028083,
      "accountName": "Enersave Golistic",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2016-01-17T01:58:52"),
      "dateBusinessEstablished": getDateString("2007-07-17T01:49:04"),
      "applicationDate": getDateString("2022-12-20T04:48:45"),
      "businessSector": "mining",
      "businessType": BusinessType.Cooperative,
      "mainBusinessLocation": "745 Melrose Street, Bladensburg, New Mexico",
      "contactPersonTelNumber": "+233 (977) 443-3745",
      "facilityType": Facility.RevolvingCredit,
      "psrScore": 0.1,
      "shareholders": [
         {
            "name": "Shepard Branch",
            "sharePercentage": 50
         },
         {
            "name": "Payne Hudson",
            "sharePercentage": 10
         }
      ]
   },
   {
      "_id": "63d82ff33876dac83382a608",
      "applicationId": "UMB/CF/04/2019",
      "accountNumber": 42107224216,
      "accountName": "Podunk Vertide",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2020-03-17T11:57:04"),
      "dateBusinessEstablished": getDateString("2006-12-02T11:23:05"),
      "applicationDate": getDateString("2022-05-28T12:59:40"),
      "businessSector": "commerce",
      "businessType": BusinessType.LimitedLiability,
      "mainBusinessLocation": "872 Burnett Street, Klagetoh, Idaho",
      "contactPersonTelNumber": "+233 (887) 597-2305",
      "facilityType": Facility.SwinglineLoan,
      "psrScore": 1,
      "shareholders": [
         {
            "name": "Gallegos Stark",
            "sharePercentage": 69
         },
         {
            "name": "Leta Best",
            "sharePercentage": 23
         }
      ]
   },
   {
      "_id": "63d82ff32ff647608cdaa369",
      "applicationId": "UMB/CF/010/2022",
      "accountNumber": 31072858102,
      "accountName": "Parleynet Splinx",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2018-07-20T11:56:10"),
      "dateBusinessEstablished": getDateString("2019-01-05T02:56:43"),
      "applicationDate": getDateString("2022-03-12T04:52:19"),
      "businessSector": "mining",
      "businessType": BusinessType.LimitedLiability,
      "mainBusinessLocation": "877 Stuyvesant Avenue, Newkirk, Maine",
      "contactPersonTelNumber": "+233 (959) 451-3115",
      "facilityType": Facility.LineOfCredit,
      "psrScore": 0.2,
      "shareholders": [
         {
            "name": "Betsy Greene",
            "sharePercentage": 36
         },
         {
            "name": "Robyn Landry",
            "sharePercentage": 76
         }
      ]
   },
   {
      "_id": "63d82ff3b9b266bc82cc2e7d",
      "applicationId": "UMB/CF/06/2018",
      "accountNumber": 63279378946,
      "accountName": "Genekom Imperium",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2019-07-02T05:31:45"),
      "dateBusinessEstablished": getDateString("2020-09-22T01:48:09"),
      "applicationDate": getDateString("2022-03-08T08:35:47"),
      "businessSector": "transportation",
      "businessType": BusinessType.SoleProprietorship,
      "mainBusinessLocation": "115 Bassett Avenue, Accoville, Nevada",
      "contactPersonTelNumber": "+233 (896) 413-2207",
      "facilityType": Facility.LetterOfCredit,
      "psrScore": 0.6,
      "shareholders": [
         {
            "name": "Munoz Gould",
            "sharePercentage": 66
         },
         {
            "name": "Haney Benson",
            "sharePercentage": 71
         }
      ]
   },
   {
      "_id": "63d82ff38093ea8c25c91b0e",
      "applicationId": "UMB/CF/04/2020",
      "accountNumber": 83976047992,
      "accountName": "Zolarex Voratak",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2014-10-04T01:16:17"),
      "dateBusinessEstablished": getDateString("2008-01-24T12:27:26"),
      "applicationDate": getDateString("2022-01-11T06:38:48"),
      "businessSector": "transportation",
      "businessType": BusinessType.Corporation,
      "mainBusinessLocation": "180 Suydam Place, Sussex, Tennessee",
      "contactPersonTelNumber": "+233 (998) 430-2891",
      "facilityType": Facility.OverdraftService,
      "psrScore": 0.6,
      "shareholders": [
         {
            "name": "Muriel Ortiz",
            "sharePercentage": 81
         },
         {
            "name": "Leann Horn",
            "sharePercentage": 16
         }
      ]
   },
   {
      "_id": "63d82ff30ced136687b9c9ec",
      "applicationId": "UMB/CF/010/2021",
      "accountNumber": 13339608497,
      "accountName": "Uneeq Extragene",
      "accountType": AccountType.Current,
      "dateAccountOpened": getDateString("2015-02-09T07:26:42"),
      "dateBusinessEstablished": getDateString("2007-10-09T12:11:19"),
      "applicationDate": getDateString("2022-08-01T10:13:35"),
      "businessSector": "agriculture",
      "businessType": BusinessType.Corporation,
      "mainBusinessLocation": "476 Richmond Street, Faxon, Massachusetts",
      "contactPersonTelNumber": "+233 (836) 457-2204",
      "facilityType": Facility.RevolvingCredit,
      "psrScore": 0.7,
      "shareholders": [
         {
            "name": "Olsen Ferguson",
            "sharePercentage": 72
         },
         {
            "name": "Linda West",
            "sharePercentage": 99
         }
      ]
   },
   {
      "_id": "63d82ff378d3205f492adc8f",
      "applicationId": "UMB/CF/09/2018",
      "accountNumber": 85534890056,
      "accountName": "Hatology Applica",
      "accountType": AccountType.Savings,
      "dateAccountOpened": getDateString("2018-02-27T12:30:58"),
      "dateBusinessEstablished": getDateString("2005-05-13T03:43:16"),
      "applicationDate": getDateString("2022-04-09T01:40:50"),
      "businessSector": "textiles",
      "businessType": BusinessType.Corporation,
      "mainBusinessLocation": "343 Neptune Avenue, Cascades, District Of Columbia",
      "contactPersonTelNumber": "+233 (889) 582-3531",
      "facilityType": Facility.DeferredPaymentPlan,
      "psrScore": 0.3,
      "shareholders": [
         {
            "name": "Kristen Miller",
            "sharePercentage": 95
         },
         {
            "name": "Robbins Whitfield",
            "sharePercentage": 53
         }
      ]
   }
];

export default applicationList;

function getDate() {
   throw new Error("Function not implemented.");
}

