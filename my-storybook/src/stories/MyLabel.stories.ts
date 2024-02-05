import { Meta, StoryObj } from "@storybook/react";
import { MyLabel, type Props } from "../components";

const meta: Meta<Props> = {
    title: "UI/labels/My Label",
    component: MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        fontColor: { control: 'color' }
    }
} satisfies Meta<typeof MyLabel>

export default meta;

type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args: {
        label: 'Basic Label'
    }
};

export const AllCaps: Story = {
    args: {
        label: 'All Caps label',
        size: 'normal',
        allCaps: true
    }
};

export const Secondary: Story = {
    args: {
        label: 'Secondary Label',
        color: "text-secondary"
    }
};

export const CustomColor: Story = {
    args: {
        label: 'Custom Color label',
        fontColor: '#a4a63c'
    }
};

export const CustomBackgroundColor: Story = {
    args: {
        label: 'Custom Color label',
        size: 'h1',
        fontColor: 'white',
        backgroundColor: 'black'
    }
};