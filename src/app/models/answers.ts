import { Authority } from "./authority";
import { Client, Group } from "./questions.interface";

  interface QuestionOptionId {
        createdBy: string;
        createdDate: string;
        deleted: boolean;
        id: number;
        lastModifiedBy: string;
        lastModifiedDate: string;
        order: number;
        text: string;
        value: string;
        version: number;
    }

    export interface OptionAnswerList {
        questionOptionId: QuestionOptionId;
    }

   interface OptionsList {
        createdBy: string;
        createdDate: string;
        deleted: boolean;
        id: number;
        lastModifiedBy: string;
        lastModifiedDate: string;
        order: number;
        text: string;
        value: string;
        version: number;
    }

   interface QuestionId {
        createdBy: string;
        createdDate: string;
        dateMaximum: string;
        dateMinimum: string;
        decimalMaximum: number;
        decimalMinimum: number;
        deleted: boolean;
        height: number;
        id: number;
        lastModifiedBy: string;
        lastModifiedDate: string;
        longMaximum: number;
        longMinimum: number;
        optionsList: OptionsList[];
        order: number;
        questionText: string;
        randomizeOptions: boolean;
        regularExpression: string;
        required: boolean;
        starRatingMaximum: number;
        tip: string;
        type: string;
        version: number;
        visible: boolean;
        width: number;
    }

    interface QuestionAnswer {
        bigDecimalAnswerValue: number;
        booleanAnswerValue: boolean;
        currencyAnswerValue: string;
        dateAnswerValue: Date;
        longAnswerValue: number;
        optionAnswerList: OptionAnswerList[];
        questionId: QuestionId;
        stringAnswerValue: string;
    }

    

   interface User {
        accountNonExpired: boolean;
        accountNonLocked: boolean;
        authorities: Authority[];
        createdBy: string;
        createdDate: string;
        credentialsNonExpired: boolean;
        dateOfBirth: string;
        deleted: boolean;
        driverLicenseNumber: string;
        email: string;
        enabled: boolean;
        firstName: string;
        gender: string;
        group: Group;
        id: number;
        initials: string;
        lastModifiedBy: string;
        lastModifiedDate: string;
        lastName: string;
        nationalIdentificationNumber: string;
        nationality: string;
        passportNumber: string;
        phoneNumber: string;
        title: string;
        username: string;
        uuid: string;
        version: number;
    }


 interface OptionsList2 {
        createdBy: string;
        createdDate: string;
        deleted: boolean;
        id: number;
        lastModifiedBy: string;
        lastModifiedDate: string;
        order: number;
        text: string;
        value: string;
        version: number;
    }

   interface Question {
        createdBy: string;
        createdDate: string;
        dateMaximum: string;
        dateMinimum: string;
        decimalMaximum: number;
        decimalMinimum: number;
        deleted: boolean;
        height: number;
        id: number;
        lastModifiedBy: string;
        lastModifiedDate: string;
        longMaximum: number;
        longMinimum: number;
        optionsList: OptionsList2[];
        order: number;
        questionText: string;
        randomizeOptions: boolean;
        regularExpression: string;
        required: boolean;
        starRatingMaximum: number;
        tip: string;
        type: string;
        version: number;
        visible: boolean;
        width: number;
    }
interface SurveyFormId {
        client: Client;
        createdBy: string;
        createdDate: string;
        deleted: boolean;
        description: string;
        id: number;
        lastModifiedBy: string;
        lastModifiedDate: string;
        name: string;
        projectNumber: string;
        questions: Question[];
        status: string;
        version: number;
    }

    export interface Answers{
        questionAnswers: QuestionAnswer[];
        surveyFormId: SurveyFormId;
    }


