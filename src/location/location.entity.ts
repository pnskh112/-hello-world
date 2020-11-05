import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';
/*import { Module } from '@nger/core';*/

@Entity()
export class Location {

  /*@PrimaryGeneratedColumn('uuid')*/
  @PrimaryColumn()
  private id: string;

  @Column()
  private name: string;
}
