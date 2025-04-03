import countYearEarn from "../../scripts/helpers/countYearEarn";
import { StockCoinInfo } from "@/scripts/stock/createStock";
import { test, describe, expect } from "@jest/globals";

describe("countYearEarn", () => {
    const coin: StockCoinInfo = {
        symbol: "USDT",
        APR: {
            value: 10,
            canStake: true,
            dayToTake: 1,
            minValue: 1000,
            bonus: {
                APR: 20,
                to: 500,
            },
        },
        coinValue: 1000,
        usdValue: 1000,
        weight: 100,
        imageLink: "",
        id: 1,
        name: "Tether",
        price: 1,
        changePercent: 0.01,
        marketCap: 1000,
    };

    const BTC: StockCoinInfo = {
        symbol: "BTC",
        APR: {
            value: 10,
            canStake: true,
            dayToTake: 1,
            minValue: 0.001,
            bonus: {
                APR: 20,
                to: 0.005,
            },
        },
        coinValue: 0.001,
        usdValue: 1000,
        weight: 100,
        imageLink: "",
        id: 1,
        name: "Bitcoin",
        price: 1,
        changePercent: 0.01,
        marketCap: 1000,
    };

    test("Проверка рассчетов доходности стейкинга с бонусом", () => {
        const totalAPR = countYearEarn(BTC);
        expect(totalAPR).toBeGreaterThan(10);
    });

    test("Проверка рассчетов доходности стейкинга с бонусом, BTC", () => {
        const totalAPR = countYearEarn(coin);
        expect(totalAPR).toBeGreaterThan(10);
    });

    test("Проверка рассчетов доходности стейкинга без бонуса", () => {
        coin.APR.bonus = undefined;

        const totalAPR = countYearEarn(coin);
        expect(totalAPR).toBeGreaterThan(9.9);
        expect(totalAPR).toBeLessThan(10.1);
    });

    test("Проверка рассчетов доходности стейкинга с ежедневным начислением", () => {
        coin.APR.bonus = undefined;
        coin.APR.minValue = 0.00001;

        const totalAPR = countYearEarn(coin);
        expect(totalAPR).toBeGreaterThan(10);
    });

    test("Проверка рассчетов доходности стейкинга с не-ежедневным начислением", () => {
        coin.APR.bonus = undefined;
        coin.APR.minValue = 0.00001;

        const totalAPR_everyday = countYearEarn(coin);

        coin.APR.dayToTake = 10;
        const totalAPR_no_everyday = countYearEarn(coin);
        expect(totalAPR_everyday).toBeGreaterThan(totalAPR_no_everyday);
        expect(totalAPR_no_everyday).toBeGreaterThan(10);
    });

    test("Проверка, что на стейкинг нельзя положить, т.к. мин. значение не достигнуто", () => {
        coin.APR.minValue = 1001;

        const totalAPR = countYearEarn(coin);
        expect(totalAPR).toBe(0);
    });

    test("Проверка, что на стейкинг нельзя положить, т.к. мин. значение не достигнуто", () => {
        BTC.APR.minValue = 1001;

        const totalAPR = countYearEarn(coin);
        expect(totalAPR).toBe(0);
    });

    test("Проверка, что на стейкинг нельзя положить, т.к. монета не стейкится", () => {
        coin.APR.minValue = 1000;
        coin.APR.canStake = false;

        const totalAPR = countYearEarn(coin);
        expect(totalAPR).toBe(0);
    });
});
