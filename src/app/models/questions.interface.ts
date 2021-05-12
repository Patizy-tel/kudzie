
    interface Authority {
        authority: string;
    }

    export interface Group {
        createdBy: string;
        createdDate: string;
        deleted: boolean;
        id: number;
        lastModifiedBy: string;
        lastModifiedDate: string;
        name: string;
        version: number;
    }

    export interface User {
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

    export interface ClientId {
        createdBy: string;
        createdDate: string;
        deleted: boolean;
        description: string;
        id: number;
        lastModifiedBy: string;
        lastModifiedDate: string;
        name: string;
        user: User;
        version: number;
    }

    export interface QuestionOption {
        order: number;
        text: string;
        value: string;
    }

    export interface Authority2 {
        authority: string;
    }

    export interface Group2 {
        createdBy: string;
        createdDate: string;
        deleted: boolean;
        id: number;
        lastModifiedBy: string;
        lastModifiedDate: string;
        name: string;
        version: number;
    }

    export interface User2 {
        accountNonExpired: boolean;
        accountNonLocked: boolean;
        authorities: Authority2[];
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
        group: Group2;
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

    export interface Client {
        createdBy: string;
        createdDate: string;
        deleted: boolean;
        description: string;
        id: number;
        lastModifiedBy: string;
        lastModifiedDate: string;
        name: string;
        user: User2;
        version: number;
    }

    export interface OptionsList {
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

    export interface Question2 {
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

    export interface SurveyFormId {
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
        questions: Question2[];
        status: string;
        version: number;
    }

    export interface Question {
        dateMaximum: string;
        dateMinimum: string;
        decimalMaximum: number;
        decimalMinimum: number;
        longMaximum: number;
        longMinimum: number;
        order: number;
        questionOptions: QuestionOption[];
        questionText: string;
        randomizeOptions: boolean;
        regularExpression: string;
        required: boolean;
        starRatingMaximum: number;
        surveyFormId: SurveyFormId;
        tip: string;
        type: string;
    }

    export interface Question {
        clientId: ClientId;
        description: string;
        name: string;
        questions: Question[];
    }



