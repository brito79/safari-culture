import React from "react";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/lib/format";
import { CampRate } from "@/types/rates";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@/components/ui/table";

// Props for CampRates
interface CampRatesProps {
    campName: string;
    rates: CampRate[];
    className?: string;
}

// CampRates table for a specific camp
const CampRates: React.FC<CampRatesProps> = ({ campName, rates, className }) => {
    // Filter rates for the given camp
    const campRates = rates.filter(rate => rate.camp === campName);

    if (campRates.length === 0) {
        return (
            <Card className={cn("w-full", className)}>
                <CardHeader>
                    <h2 className="text-xl font-semibold">Rates for {campName}</h2>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">No rates available for this camp.</p>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className={cn("w-full", className)}>
            <CardHeader>
                <h2 className="text-xl font-semibold">Rates for {campName}</h2>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Season</TableCell>
                            <TableCell>Start Date</TableCell>
                            <TableCell>End Date</TableCell>
                            <TableCell>Rate (pppn)</TableCell>
                            <TableCell>Currency</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {campRates.map((rate) => (
                            <TableRow key={rate.id}>
                                <TableCell>{rate.season}</TableCell>
                                <TableCell>{rate.startDate}</TableCell>
                                <TableCell>{rate.endDate}</TableCell>
                                <TableCell>{formatCurrency(rate.amount, rate.currency)}</TableCell>
                                <TableCell>{rate.currency}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default CampRates;