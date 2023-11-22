import { FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlHelper, FormControlHelperText, FormControlLabel, FormControlLabelText, Input, InputField } from "@gluestack-ui/themed";

export default function NomInput() {
    return (
        <FormControl isRequired>
            <FormControlLabel>
                <FormControlLabelText>
                    Nom
                </FormControlLabelText>
            </FormControlLabel>
            <Input>
                <InputField type="text" placeholder="Inserer le nom" />
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