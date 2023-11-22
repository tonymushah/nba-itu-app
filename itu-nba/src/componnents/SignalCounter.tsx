import { Button, ButtonText } from "@gluestack-ui/themed";
import { useSignal } from "@preact/signals-react";

export default function SignalCounter() {
  const counter = useSignal(0);
  return (
    <Button
      onPress={() => {
        counter.value++;
      }}
    >
      <ButtonText>Count: {counter}</ButtonText>
    </Button>
  );
}
