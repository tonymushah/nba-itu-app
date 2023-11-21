import { FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlHelper, FormControlHelperText, FormControlLabel, FormControlLabelText, Input, InputField } from "@gluestack-ui/themed";
import { Platform } from "react-native";
import DatePicker from "../../DatePicker";
import { useSignal } from "@preact/signals-react";

export default function DateNaissance() {
    const dateDeNaissance = useSignal(new Date());
    return (
        <FormControl isRequired>
            <FormControlLabel>
                <FormControlLabelText>
                    Date de naissance
                </FormControlLabelText>
            </FormControlLabel>
            <DatePicker onChange={d => {
                dateDeNaissance.value = d;
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