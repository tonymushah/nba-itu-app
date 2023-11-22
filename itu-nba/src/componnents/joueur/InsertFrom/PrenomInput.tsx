import { FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlHelper, FormControlHelperText, FormControlLabel, FormControlLabelText, Input, InputField } from "@gluestack-ui/themed";

export default function PrenomInput() {
    return (
        <FormControl isRequired>
            <FormControlLabel>
                <FormControlLabelText>
                    Prenom
                </FormControlLabelText>
            </FormControlLabel>
            <Input>
                <InputField type="text" placeholder="Inserer le prenom" />
            </Input>
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