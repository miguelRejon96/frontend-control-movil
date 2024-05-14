import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SelectProps = {
  placeholder: string;
  disabledValue: string;
  items: SelectItemsProps[];
};

type SelectItemsProps = {
  value: string;
  label: string;
};

export function SelectComponent(props: SelectProps) {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder={props.placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{props.disabledValue}</SelectLabel>
          {props.items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <h1>{item.label}</h1>
              <p className="text-xs text-gray-500">{item.value}</p>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default SelectComponent;
