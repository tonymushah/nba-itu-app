import { Box, Center, Text } from "@gluestack-ui/themed";

import DateNaissance from "./InsertFrom/DateNaissanceInput";
import DisponibleInput from "./InsertFrom/DisponibleInput";
import EquipeInput from "./InsertFrom/EquipeInput";
import GenreInput from "./InsertFrom/Genre";
import NomInput from "./InsertFrom/NomInput";
import PrenomInput from "./InsertFrom/PrenomInput";

export default function InsertFrom() {
    return (
        <Box>
            <Center>
                <Text>Joueur</Text>
            </Center>
            <NomInput />
            <PrenomInput />
            <DateNaissance />
            <GenreInput />
            <EquipeInput />
            <DisponibleInput />
        </Box>
    );
}
