import { LightningElement } from 'lwc';

// Import custom labels
import greeting from '@salesforce/label/c.greeting';
import salesforceLogoDescription from '@salesforce/label/c.salesforceLogoDescription';

// Import localizerjs
import { formattingOptions } from '@localizer/get-intl-options-from-cldr';
import { getDateTimeFormat } from '@localizer/localization-service';

import LOCALE from '@salesforce/i18n/locale';

export default class SampleInternationalization extends LightningElement {
    // Expose the static resource URL to use in the template.
    logoUrl =
        'https://developer.salesforce.com/resources2/images/salesforce-header-logo.png';

    // Expose the labels to use in the template.
    label = {
        greeting,
        salesforceLogoDescription
    };

    locale = LOCALE;

    get currentDate() {
        var date = new Date();

        // Intl replacement
        var longDateOptions = formattingOptions.longDateFormat;
        var dateFormatterLong = getDateTimeFormat(this.locale, longDateOptions);
        var formattedDateLong = dateFormatterLong.format(date);

        return formattedDateLong;
    }
}
