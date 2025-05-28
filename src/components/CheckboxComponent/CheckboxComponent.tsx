import { Checkbox } from "../ui/checkbox";

type CheckboxComponentProps = {
    type: string;
  };
  
  export function CheckboxComponent({ type }: CheckboxComponentProps) {
    switch (type) {
      case 'Estudo':
        break;
      case 'Trabalho':
        break;
      case 'Outros':
        break;
      default:
        break;
    }
  
    return (
      <div className="items-top flex space-x-2">
        <Checkbox id="terms1" />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
          </label>
        </div>
      </div>
    );
  }
  