export interface ButtonProps {
    clickhandler: () => void;
    label ?: string;
    size : "small" | "medium" | "large";
    backgroundColor?: string;
    color ?: string;
    themes ?: 'primary' |'secondary' | 'tertiary';

}
