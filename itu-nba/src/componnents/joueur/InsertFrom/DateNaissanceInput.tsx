import { FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlHelper, FormControlHelperText, FormControlLabel, FormControlLabelText, Input, InputField } from "@gluestack-ui/themed";
import DatePicker from "../../DatePicker";
import { useSignal } from "@preact/signals-react";
import React from "react";

export default function DateNaissance() {
    const [date, setDate] = React.useState(new Date());
    const [, startTransition] = React.useTransition();
    return (
        <FormControl isRequired>
            <FormControlLabel>
                <FormControlLabelText>
                    Date de naissance
                </FormControlLabelText>
            </FormControlLabel>
            <DatePicker onChange={(d) => {
                startTransition(() => {
                    setDate(d);
                });
            }} placeholder="Inserer date de naissance" />
            <FormControlHelper>
                <FormControlHelperText />
            </FormControlHelper>
            <FormControlError>
                <FormControlErrorIcon />
                <FormControlErrorText />
            </FormControlError>
        </FormControl>
    );
}