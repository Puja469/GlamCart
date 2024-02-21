package com.example.cosmetics12.entity;



import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="categories")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Category {
    @Id
    @SequenceGenerator(name = "category_seq_gen", sequenceName = "category_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "event_seq_gen", strategy = GenerationType.SEQUENCE)
    @Column(name="id" , nullable = false)
    private Integer id;
    @Column(name="name" , nullable=false)
    private String name;

}
