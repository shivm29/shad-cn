import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tw-merge";


export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}